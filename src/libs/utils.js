export default {
  randomiseArr: arr => {
    // eslint-disable-next-line no-console
    console.log('randomising');
    return arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  },
};
