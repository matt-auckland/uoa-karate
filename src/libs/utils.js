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
  },
  calculateDateString(startDate, endDate) {
    if (!startDate) return "";
    const formattedStartDate = new Intl.DateTimeFormat(
      "default",
      this.calculateFormatterOptions(startDate)
    ).format(new Date(startDate));

    if (!endDate) return formattedStartDate;

    const formattedEndDate = new Intl.DateTimeFormat(
      "default",
      this.calculateFormatterOptions(endDate)
    ).format(new Date(endDate));

    if (formattedStartDate === formattedEndDate) {
      return formattedStartDate
    }
    return `${formattedStartDate} - ${formattedEndDate}`;
  },
  calculateFormatterOptions(dateStr) {
    const fullDateOptions = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    };

    const fullDateTimeOptions = {
      ...fullDateOptions,
      hour: 'numeric',
      minute: 'numeric',
    }

    const monthYearOptions = {
      month: "long",
      year: "numeric"
    };

    switch (dateStr.split(/[-T]/).length) {
      case 1:
        return { year: "numeric" };
      case 2:
        return monthYearOptions;
      case 3:
        return fullDateOptions;
        default:
        return fullDateTimeOptions;
    }
  }
};
