const lauras = {
  firstName: "Laura",
  lastName: "Telqiu",
  birthYear: 1982,
  job: "front end developer",
  friends: ["Jonki", "Vjollca", "Mia"],
  hasDriversLicence: true,
  // lauras is calliong the calcAge functions therefore this referes to lauras object
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return (`${this.firstName} is a ${this.calcAge()} year old, ${lauras.job
      }, and she has ${this.hasDriversLicence ? "a" : "no"} driver's licence.`)
  },
};

// console.log(lauras.calcAge());
console.log(lauras.getSummary());
