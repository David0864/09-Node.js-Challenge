// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
                type: 'input',
                name: 'title',
                message: 'What is the title?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter description',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What command install should be used for dependencies?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How would you like to use this repo?',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Where are you from?', 
                choices: ['None','MIT', 'IBM']
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Who contributed?',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What command should be used to run tests?',
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Questions about repo.',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email',
            },
            
        ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const README = generateMarkdown(answers);
        
            fs.writeFile('README.md', README, (err) =>
              err ? console.log(err) : console.log('Successfully created README.md!')
            );
          });
}

// Function call to initialize app
init();