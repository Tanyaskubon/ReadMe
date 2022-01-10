// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub](https://img.shields.io/github/license/Tanyaskubon/Readme?color=green&style=social)
  
 ## Description 
${data.description}


## Table Of Contents
* [Description](#description)
* [Instalation](#instalation)
* [Useage](#useage)
* [Contributing](#contributing)
* [License](#license)


## Installation
${data.instalation}
## Useage
${data.useage}
## License 
Project license  ${data.license}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
If you have any questions please contact me at ${data.email}
You can view my projects at https://github.com/${data.github}


`;
}

module.exports = generateMarkdown;
