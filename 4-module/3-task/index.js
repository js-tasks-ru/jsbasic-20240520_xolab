function highlight(table) {
  const rows = table.tBodies[0].rows;
  for (let row of rows) {
    let rowClassList = '';
    rowClassList = row.cells[3].getAttribute('data-available') === "true"
      ? 'available'
      : 'unavailable';
    row.classList.add(rowClassList);

    rowClassList = row.cells[2].innerHTML === 'm'
      ? 'male'
      : 'female';
    row.classList.add(rowClassList);

    row.hidden = !row.cells[3].hasAttribute('data-available');

    if (row.cells[1].innerHTML < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
