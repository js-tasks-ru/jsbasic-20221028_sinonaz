function camelize(str) {
  // ваш код...
  return str
    .split(`-`)
    .map((item, index) => {
      if (index != 0) {
        return item[0].toUpperCase() + item.slice(1);
      } else {
        return item;
      }
    })
    .join(``);
}
