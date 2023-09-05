export default class Carbon {
  constructor(date) {
    this.date =
      typeof date === "string" || typeof date === "number"
        ? new Date(date)
        : date;
  }

  toHumanReadable() {
    return `${this.getMonth()} ${this.date.getDate()}, ${this.date.getFullYear()}`;
  }

  toDateString() {
    return this.date.toDateString();
  }

  getDate() {
    return this.date.getDate();
  }

  getDay() {
    return this.date.getDay();
  }

  getYear() {
    return this.date.getFullYear();
  }

  get12HourTime() {
    let hours = this.date.getHours();
    let minutes = this.date.getMinutes();
    let duration = "AM";
    if (hours >= 12) {
      duration = "PM";
      hours = 24 - hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return `${hours}:${minutes} ${duration}`;
  }

  getMonth() {
    switch (this.date.getMonth()) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  }
}
