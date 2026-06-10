import {TabulatorFull as Tabulator} from 'tabulator-tables';

const d = document;

function initTabulator() {
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
