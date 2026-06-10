import {HtmlTableImportModule, SortModule, Tabulator} from 'tabulator-tables';

const d = document;

function initTabulator() {
  Tabulator.registerModule([HtmlTableImportModule, SortModule]);
  const allTables = d.querySelectorAll('.e-content table');
  for(const t of allTables) {
    const table = new Tabulator(t, {
      importTable: true, 
      layout: "fitColumns",
      
      columnDefaults: {
          formatter: "html"
      }
    });
  }
}

export {initTabulator};
