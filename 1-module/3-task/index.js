function ucFirst(str) {
  // ваш код...
  if (str) {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return str;
  }
}
