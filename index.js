const inquirer = require("inquirer");

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
    message: "Please provide any installation instructions for your project",
  },
];
