const Employee = require("./Employee");

class Intern extends Employee {
  constructor(data) {
    super(data);

    this.school = data.school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.occupation;
  }
}
module.exports = Intern;
