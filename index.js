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

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
