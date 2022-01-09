

// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const generateReadME = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'Enter your title'
     
    },
     {
        type: 'input',
        name: 'Description',
        message:'Enter your project description'
     
    },
    {
        type: 'input',
        name: 'github',
        message:'Enter your GitHub Username'
     
    },
    {
        type: 'input',
        name: 'Email',
        message:'Enter your Email'
     
    },
    {
        type: 'confirm',
        name: 'TableOfContents',
        message:'Enter your table of contents'
     },
     
     {
        type: 'input',
        name: 'instalation',
        message:'Enter your instaltion packages',
        default:'npm i'
     },
     {
        type: 'input',
        name: 'useage',
        message:'How do you use this project'
     },
     {
        type: 'input',
        name: 'Contributing',
        message:'How do you use this project'
     },
    {
        type: 'list',
        name: 'license',
        message:'Enter your license ',
        choices: ['MIT License', 'GNU GPL 2.0', 'Apache License 2.0', 'GNU GPL 3.0' ]
     
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('readme.md',generateReadME({...answers}))
    })
}

// Function call to initialize app
init();
