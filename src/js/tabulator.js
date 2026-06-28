// @ts-check

/**
 * @fileoverview Converts HTML tables inside `.e-content` into interactive
 * Tabulator tables with sorting support.
 * Only the `HtmlTableImportModule` and `SortModule` are registered to keep
 * the bundle size minimal.
 * @module tabulator
 */

import { HtmlTableImportModule, SortModule, Tabulator } from 'tabulator-tables';

const d = document;

/**
 * Registers required Tabulator modules and upgrades every `<table>` element
 * found inside `.e-content` to a fully interactive Tabulator instance.
 *
 * Each table is configured with:
 * - `importTable: true` — reads initial data from the existing HTML markup.
 * - `layout: "fitColumns"` — columns stretch to fill the available width.
 * - `formatter: "html"` on all columns — preserves inline HTML in cells.
 *
 * @returns {void}
 */
function initTabulator() {
  Tabulator.registerModule([HtmlTableImportModule, SortModule]);
  const allTables = d.querySelectorAll('.e-content table');
  for (const t of allTables) {
    const table = new Tabulator(t, {
      importTable: true,
      layout: "fitColumns",

      columnDefaults: {
        formatter: "html"
      }
    });
  }
}

export { initTabulator };
