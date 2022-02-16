const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(data) {
    super(data);

    this.github = data.github;
  }

  getRole() {
    return this.occupation;
  }
}

module.exports = Engineer;
