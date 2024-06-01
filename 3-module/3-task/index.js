function camelize(str) {
  const camelize
    = str
    .split('-')
    .reduce((sum, item) => {
      return item === ''
        ? ' '
        : `${sum}${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`;
    }, '');

  return (`${camelize.charAt(0).toLowerCase()}${camelize.slice(1)}`).trim();
}
