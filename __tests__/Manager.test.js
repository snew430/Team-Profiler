const Manager = require("../lib/Manager");

it("creates the users Office Number", () => {
  const data = {
    name: "Dave",
    id: 1,
    email: "me@me.com",
    occupation: "Manager",
    office: 1,
  };
  const manager = new Manager(data);

  expect(manager.office).toEqual(expect.any(Number));
});

it("creates a return of the the managers occupation", () => {
    const data = {
        name: "Dave",
        id: 1,
        email: "me@me.com",
        occupation: "Manager",
        office: 1,
      };
  const manager = new Manager(data);

  expect(manager.getRole()).toEqual(data.occupation);
});
