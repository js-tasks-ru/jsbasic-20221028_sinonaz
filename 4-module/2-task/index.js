function makeDiagonalRed(table) {
  // ваш код...
  const rowList = table.rows;
  for (i = 0; i < rowList.length; i++) {
    rowList[i].cells[i].style.backgroundColor = `red`;
  }
}
