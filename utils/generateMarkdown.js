function generateMarkdown(data) {
  return `# ${data.title}
    ## License:
    [![License](https://img.shields.io/badge/License-${data.license}.svg)](https://opensource.org/licenses/${data.license})

    ## Description:
    ${data.description}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contributors)
    - [Tests](#test)
    - [Questions](#questions)

    ## Installation:
    ${data.installation}

    ## Usage:
    ${data.usage}

    ## License:
    ${data.license}

    ## Contributions:
    ${data.contributors}

    ## Tests: 
    ${data.test}

    ## Questions:
    If you have any quesions please do not hesitate to contact me through:
    - GitHub: [${data.github}](https://github.com/${data.github})
    - Email: [${data.email}](mailto:${data.email})
    `;
}

module.exports = generateMarkdown;
