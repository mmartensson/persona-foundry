import { html, nothing, TemplateResult } from 'lit';
import { SensetypeID, sensetypes } from '../data/sensetypes';
import { books } from '../data/books';
import { MinimalLookupTable, HasTableLookup } from '../tables';

export const renderBook = (contentSrc?: string): TemplateResult | unknown => {
  if (contentSrc) {
    const book = books.find(b => b.codeName === contentSrc);

    if (!book) {
      return html`<span class="is-italic has-tooltip-arrow has-tooltip-info" data-tooltip="Source Book:&#10;No information available">${contentSrc}</span>`;
    }

    return html`<a href=${book.url} target="_blank" class="is-italic has-tooltip-arrow has-tooltip-info" data-tooltip="Source Book:&#10;Paizo Homepage opens in new browser tab">${book.name}</a>`;
  }
  return nothing;
}

export const renderMisc = <T extends MinimalLookupTable, I extends T[number]['id']>(ids: I[], table: T & HasTableLookup<T>) => {
  if (!table || !ids || ids.length === 0) return nothing;
  
  const items = ids
    .map(id => table.byId(id))
    .filter(r => r != null)
    .map(row => html`
      <span class="has-tooltip-arrow has-tooltip-multiline has-tooltip-info mr-1" data-tooltip=${'description' in row ? row.description : undefined}>${row.name}</span>
    `);

  return items;
}
