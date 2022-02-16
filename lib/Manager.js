const Employee = require("./Employee");

class Manager extends Employee {
  constructor(data) {
    super(data);

    this.office = data.office;
  }

  getRole() {
    return this.occupation;
  }
}

module.exports = Manager