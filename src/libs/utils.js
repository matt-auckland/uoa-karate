export default {
  randomiseArr: arr => {
    return arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  },
  calculateYears(dateString) {
    const parsedDate = new Date(dateString)
    const now = new Date()
    return now.getFullYear() - parsedDate.getFullYear()
  }
};
