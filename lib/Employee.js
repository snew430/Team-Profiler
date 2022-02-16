class Employee {
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.email = data.email;
    this.occupation = data.occupation;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.occupation;
  }
}

module.exports = Employee;
