const inquirer = require("inquirer");

const promptPeople = (teamData) => {
  if (!teamData) {
    teamData = [];
  }

  console.log(`
    =====================
    Add a New Team Member
    =====================
    `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your team member's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is your team member's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your team member's email?",
      },
      {
        type: "list",
        name: "occupation",
        message: "What is your team member's occupation?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "office",
        message: "What is your managers office number?",
        when: ({ occupation }) => {
          if (occupation === "Manager") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is your engineer's GitHub account?",
        when: ({ occupation }) => {
          if (occupation === "Engineer") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is your intern's school name?",
        when: ({ occupation }) => {
          if (occupation === "Intern") {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddPerson",
        message: "Would you like to add another team member?",
        default: false,
      },
    ])
    .then((person) => {
      teamData.push(person);
      if (person.confirmAddPerson) {
        return promptPeople(teamData);
      } else {
        return teamData;
      }
    });
};

module.exports = promptPeople;
