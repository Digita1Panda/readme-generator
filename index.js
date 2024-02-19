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
    message: "Please provide any installation instructions for your project.",
  },
  // Usage information
  {
    type: "input",
    name: "usage",
    message: "What is the usage for this project/application?",
  },
  //   License selection
  {
    type: "checkbox",
    name: "license",
    message: [
      "MIT",
      "Apache License 2.0",
      "GNU General Public License (GPL) v3",
      "Mozilla Public License 2.0",
      "BSD 3-Clause License",
      "N/A",
    ],
  },
  //   People who contributed
  {
    type: "input",
    name: "contributors",
    message:
      "Please list any contributors to the project or state how people can contribute to the project.",
  },
];
