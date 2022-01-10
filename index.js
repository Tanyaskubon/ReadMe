
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
        message:'Enter your title',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your title!');
              return false;
            }
          }
     
    },
     {
        type: 'input',
        name: 'description',
        message:'Enter your project description',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your project description!');
              return false;
            }
          }
     
    },
    {
        type: 'input',
        name: 'github',
        message:'Enter your GitHub Username',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your GitHub Username name!');
              return false;
            }
          }
        
    },
    {
        type: 'input',
        name: 'email',
        message:'Enter your Email',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your Email!');
              return false;
            }
          }
     
    },
     
     {
        type: 'input',
        name: 'instalation',
        message:'Enter your instaltion packages',
        default: 'npm i'
     },
     {
        type: 'input',
        name: 'useage',
        message:'How do you use this project',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter how to use this project!');
              return false;
            }
          }
     },
     {
        type: 'input',
        name: 'tests',
        message:'What should be done to run the test?',
        default: 'npm test'
     },
     {
        type: 'input',
        name: 'contributing',
        message:'Please add contributions?'
        
     },
     
    {
        type: 'list',
        name: 'license',
        message:'Enter your license ',
        choices: ['MIT', 'GNU GPL 2.0', 'Apache License 2.0', 'GNU GPL 3.0' ],
        default:['MIT'],
        validate: nameInput => {
            if (nameInput){
                return true;
            }else {
                console.log('Please select a licence');
                return false;
            }
        }
     },
     {
        type: 'confirm',
        name: 'tableOfContents',
        message:'Enter your table of contents'
        
     },
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
