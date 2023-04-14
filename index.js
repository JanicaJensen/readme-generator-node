// Dependencies that are required to run the app.
const inquirer = require("inquirer");
const fs = require("fs");

// Where more license badges would go if I knew of any other than MIT.
let badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';


// An array of questions for inquirer to prompt.
const questions = [
    {
        type: 'input', 
        name: 'title', 
        message: 'Enter title:'
    },
    {
        type: 'input', 
        name: 'description', 
        message: 'Please provide a description for your project:'
    },
    {
        type: 'input', 
        name: 'installation', 
        message: 'Enter installation information:'
    },
    {
        type: 'input', 
        name: 'usage', 
        message: 'Enter usage information:'
    },
    {
        type: 'input', 
        name: 'bugs', 
        message: 'Enter bugs information:'
    },
    {
        type: 'input', 
        name: 'tests', 
        message: 'Enter info about tests:'
    },
   {
    type: 'input',
    name: 'team',
    message: 'List the creator(s) name(s):'
   }, 
   {
    type: 'input', 
    name: 'tools',
    message: 'What other tools where used for this project?'
   },
   {
    type: 'input', 
    name: 'email', 
    message: 'Enter email for questions:'
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['none', 'MIT', 'other license', 'another license'],
  },
  {
    type: 'input', 
    name: 'username', 
    message: 'Enter GitHub username:'
},
{
    type: 'input', 
    name: 'guidelines', 
    message: 'Enter contribution guidelines:'
},
];



//Function writes a readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if(err)
        {
        console.error("something happened when generating the file.", err)
        }
        else {
            console.log("Written!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
inquirer.prompt(questions)



.then(answers =>{
    //I want to keep this here so that I remember this is another way to do it.
    // const title = answers.title;
    // const author = answers.author;

    const {title, team, description, tools, installation, usage, bugs, email, tests, username, guidelines, license, } = answers;
    
    let output = 
`
# ${title}

${badge}

## Description
---
${description}

## Table of Contents
1. [Team](#team)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Tests](#tests)
5. [Bugs](#bugs)
6. [Questions](#questions)
7. [Contribution Guidelines](#contribution-guidelines)
8. [License](#license)

## Team
---
Made by ${team}.



*Other tools utilized:* 

${tools}



## Installation
---
${installation}



## Usage
---
${usage}



## Tests
---
${tests}



## Bugs
---
${bugs}



## Questions
---
Please refer any questions to: ${email} 

**GitHub profile:** https://github.com/${username}

## Contribution Guidelines
---
${guidelines}

## License
---
This project is covered under the ${license} license. 
More info can be found by clicking the badge above the description.

`;


    
    writeToFile("README.md", output);
    
})

