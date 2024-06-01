function getMinMax(str) {
  const numberArr = str
    .split(' ')
    .filter(item => !isNaN(Number(item)));

  return {
    min: Math.min(...numberArr),
    max: Math.max(...numberArr)
  };
}
