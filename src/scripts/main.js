'use strict';

function makeSortable(table) {
  const head = table.querySelector('[data-header]');
  const body = table.querySelector('[data-sort-container]');

  head.addEventListener('click', () => {
    const columnTitle = event.target.closest('[data-type]');

    const column = columnTitle.dataset.index;
    const sortType = columnTitle.dataset.type;
    const rows = [...body.children];

    rows.sort((rowA, rowB) => {
      const valueA = rowA.children[column].textContent;
      const valueB = rowB.children[column].textContent;
      switch (sortType) {
        case 'number':
          return valueA - valueB;
        case 'string':
          return valueA.localeCompare(valueB);
        default:
          return 0;
      }
    });

    for (const row of rows) {
      body.appendChild(row);
    }
  });
}

makeSortable(document.querySelector('[data-sortable]'));
