function highlight(table) {
  // ваш код...
  const tableBody = table.querySelector(`tbody`);
  const rows = tableBody.rows;

  for (row of rows) {
    const status = row.cells[3];
    const gender = row.cells[2];
    const age = row.cells[1];

    switch (status.dataset.available) {
    case `true`:
      row.classList.add(`available`);
      break;
    case `false`:
      row.classList.add(`unavailable`);
      break;
    case undefined:
      row.hidden = true;
      break;
    }

    switch (gender.textContent) {
    case `f`:
      row.classList.add(`female`);
      break;
    case `m`:
      row.classList.add(`male`);
      break;
    }

    if (age.textContent < 18) {
      row.style.textDecoration = `line-through`;
    }
  }
}
