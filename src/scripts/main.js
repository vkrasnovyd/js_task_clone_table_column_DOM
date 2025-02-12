'use strict';

const table = document.querySelector('table');
const rowsArray = Array.from(table.rows);
const columnsOrder = [0, 1, 2, 3, 1, 4];

// Detach table to optimise handling of large tables
const tableParent = table.parentNode;

tableParent.removeChild(table);

rowsArray.forEach((row) => {
  const cellsArray = Array.from(row.cells);
  const rowFragment = document.createDocumentFragment();

  columnsOrder.forEach((index) => {
    rowFragment.appendChild(cellsArray[index].cloneNode(true));
  });

  row.innerHTML = '';
  row.appendChild(rowFragment);
});

// Reattach table
tableParent.appendChild(table);
