const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

console.log(
  "Please answer the following questions to generate your own personal README file"
);

const questions = [
  // Title of the project
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  // Description section
  {
    type: "input",
    name: "description",
    message: "Please enter a description for your project.",
  },
  // Installation instructions
  {
    type: "input",
    name: "installation",
    message: "Please provide any installation instructions for your project.",
  },
  // Usage information
  {
    type: "input",
    name: "usage",
    message: "What is the usage for this project/application?",
  },
  // License selection
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license that is best suited for your project.",
    choices: [
      "MIT",
      "Apache License 2.0",
      "GNU General Public License (GPL) v3",
      "Mozilla Public License 2.0",
      "BSD 3-Clause License",
      "N/A",
    ],
  },
  // People who contributed
  {
    type: "input",
    name: "contributors",
    message:
      "Please list any contributors to the project or state how people can contribute to the project.",
  },
  // Test instructions
  {
    type: "input",
    name: "test",
    message: "Please provide details on how to test this application.",
  },
  // GitHub user name
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username.",
  },
  // Email address
  {
    type: "input",
    name: "email",
    message: "Please enter your email address for contact information.",
  },
];

// Function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log("Success!")
  );
}

// Function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("./utils/README.md", generateMarkdown(answers), (err) => {
      console.log(err);
    });
  });
}

init();
