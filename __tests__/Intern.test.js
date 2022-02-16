const Intern = require("../lib/Intern");

it("creates the users GitHub account", () => {
  const data = {
    name: "Dave",
    id: 1,
    email: "me@me.com",
    occupation: "Intern",
    school: "Vanderbilt University",
  };
  const intern = new Intern(data);

  expect(intern.school).toEqual(expect.any(String));
});

it("creates a return of the the interns occupation", () => {
  const data = {
    name: "Dave",
    id: 1,
    email: "me@me.com",
    occupation: "Intern",
    school: "Vanderbilt University",
  };
  const intern = new Intern(data);

  expect(intern.getRole()).toEqual(data.occupation);
});
