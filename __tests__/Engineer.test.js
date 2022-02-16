const Engineer = require("../lib/Engineer");

it("creates the users GitHub account", () => {
  const data = {
    name: "Dave",
    id: 1,
    email: "me@me.com",
    occupation: "Engineer",
    github: "me123",
  };
  const engineer = new Engineer(data);

  expect(engineer.github).toEqual(expect.any(String));
});

it("creates a return of the the engineers occupation", () => {
  const data = {
    name: "Dave",
    id: 1,
    email: "me@me.com",
    occupation: "Engineer",
    github: "me123",
  };
  const engineer = new Engineer(data);

  expect(engineer.getRole()).toEqual(data.occupation);
});
