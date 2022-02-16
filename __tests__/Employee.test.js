const Employee = require("../lib/Employee");

it("creates an employee object", () => {
  const data = { name: "Dave", id: 1, email: "me@me.com" };
  const employee = new Employee(data);

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

it("creates a return of the employees name", () => {
  const data = { name: "Dave", id: 1, email: "me@me.com" };
  const employee = new Employee(data);

  expect(employee.getName()).toEqual(data.name);
});

it("creates a return of the employees id", () => {
  const data = {
    name: "Dave",
    id: 1,
    email: "me@me.com",
    occupation: "Employee",
  };
  const employee = new Employee(data);

  expect(employee.getId()).toEqual(data.id);
});

it("creates a return of the employees email", () => {
  const data = {
    name: "Dave",
    id: 1,
    email: "me@me.com",
    occupation: "Employee",
  };
  const employee = new Employee(data);

  expect(employee.getEmail()).toEqual(data.email);
});

it("creates a return of the employees occupation", () => {
  const data = {
    name: "Dave",
    id: 1,
    email: "me@me.com",
    occupation: "Employee",
  };
  const employee = new Employee(data);

  expect(employee.getRole()).toEqual(data.occupation);
});
