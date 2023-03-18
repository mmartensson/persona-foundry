import { FeatID } from "../data/feats";
import { SensetypeID } from "../data/sensetypes";
import { ClassabilityID } from '../data/classabilities';
import { LanguageID } from '../data/languages';
import { Choice } from "../state";
import { Ability, abilityNames } from "../tables";
import { conditionalTestProcessor } from "../wsc/conditionals";
import { StatementCall, statementCallProcessor } from "../wsc/statements";
import { Expression, SpeedType } from "../wsc/types";
import { AdjustableIdSet, AdjustableInteger, AdjustableStatistic, AdjustableProficiencies } from "./adjustables";
import { PhysicalfeatureID } from "../data/physicalfeatures";
import { TagID } from "../data/tags";

const abilitySumCallback = (value: number, subtotal: number): number => {
  if (value <= 0) return value;

  // Any positive value is assumed to be following the normal rules; so +1 if under 18 - otherwise +1.
  return subtotal < 18 ? 2 : 1;
}

type BlockExecution = {
  block: Expression[];
  refBase: string;
  description: string;
  level: number;
}

export class CalculatedSheet {
  #blockHistory = new Set<string>(); // refBase already handled
  #blockQueue: BlockExecution[] = [];
  #blockExecuting = false;

  abilities: Record<Ability, AdjustableInteger>;

  speed: Record<SpeedType, AdjustableStatistic>;

  /** Choices that are relevant to the current sheet; including choices already made. */
  activeChoices: Choice[] = [];

  focusPoints = new AdjustableInteger(0);

  proficiencies = new AdjustableProficiencies();

  senses = new AdjustableIdSet<SensetypeID>();

  feats = new AdjustableIdSet<FeatID>();

  clabs = new AdjustableIdSet<ClassabilityID>();

  languages = new AdjustableIdSet<LanguageID>();

  physicalFeatures = new AdjustableIdSet<PhysicalfeatureID>();

  traits = new AdjustableIdSet<TagID>();

  constructor() {
    this.abilities = Object.fromEntries(abilityNames.map(n => 
        [ n, new AdjustableInteger(10, abilitySumCallback) ])) as Record<Ability, AdjustableInteger>;

    this.speed = {
      burrow: new AdjustableStatistic(0),
      climb:  new AdjustableStatistic(0),
      fly:    new AdjustableStatistic(0),
      land:   new AdjustableStatistic(30),
      swim:   new AdjustableStatistic(0),
    }
  }

  executeBlock(block: Expression[], refBase: string, description: string, level: number): void {
    if (!block) return;

    if (this.#blockHistory.has(refBase)) return;

    const execution = { block, refBase, description, level } as const satisfies BlockExecution;
    this.#blockQueue.push(execution);

    this.#blockHistory.add(refBase);

    if (this.#blockExecuting) {
      console.log('Queued block for imminent execution', execution);
      return;
    }

    // This is not about thread safety, but rather about dealing with things like GIVE-FEAT-NAME
    // adding a feat, which in turn has code that should be run. To avoid recursion, and also to
    // ensure blocks of code are allowed to be executed from start to end uninterrupted, we employ
    // a FIFO queue. After successfully executing a block, any blocks having ended up in the queue
    // will then be executed until the queue is empty. Each block, as identified by its refbase,
    // will only be executed once; this is ensured by means of the block history.

    this.#blockExecuting = true;
    let nextExecution: BlockExecution|undefined = undefined;
    while ((nextExecution = this.#blockQueue.shift())) {
      console.group(`⚙ Executing code block "${nextExecution.description}" ${nextExecution.refBase} (${nextExecution.block.length} lines)`);
      try {
        this.#executeBlock(nextExecution);
      } catch (error) {
        console.error('Problem while executing code block', nextExecution, error);
      }
      console.groupEnd();
    }
    this.#blockExecuting = false;
  }

  #executeBlock(execution: BlockExecution) { 
    const { block, refBase, description, level } = execution;

    let index = 0;
    for (const expression of block) {
      let statement: StatementCall | undefined;
      if ('conditionals' in expression) {
        const { conditionals, consequent, alternate } = expression;
        statement = consequent;
        for (const test of conditionals) {
          if (conditionalTestProcessor.processTest(test, this) == false) {
            statement = alternate;
            break;
          }
        }
      } else {
        statement = expression;
      }
  
      index++;
      const ref = `${refBase}#${index}`;
  
      if (statement) {
        statementCallProcessor.processCall(statement, this, ref, description, level);
      }
    }
  }
}