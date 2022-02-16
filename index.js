const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const markupGenerator = require("./utils/markupGenerator");
const prompts = require("./utils/prompts");
fs = require("fs");

prompts().then((teamData) => {
  let people = [];
  teamData.forEach((element) => {
    switch (element.occupation) {
      case "Manager":
        const manager = new Manager(element);
        people.push(manager);
        return;
      case "Engineer":
        const engineer = new Engineer(element);
        people.push(engineer);
        return;
      case "Intern":
        const intern = new Intern(element);
        people.push(intern);
        return;
    }
    console.log(people);
  });
  fs.writeFile(`./dist/index.html`, markupGenerator(people), (err) => {
    if (err) {
      reject(err);
      return;
    }
  });
});
