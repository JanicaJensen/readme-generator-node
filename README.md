# Readme Generator using Node.js and npm Inquirer

## Description

This is an app that runs in the command line which can be use to generate a README.md file for any project. This app will ask you questions, the answers to which will be populated in the folder of the project. It will generate sections titled Description, Team, Installation, Usage, Tests, Bugs, Questions, Contribution Guidelines, and License as well as a Table of Contents to click around in case it is long.

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

The app was created by Janica Jensen, though a starter code was provided by U of U & EdEX bootcamp.

_Other tools utilized:_

Node.js: https://nodejs.org/en

npm Inquirer.js: https://www.npmjs.com/package/inquirer

## Installation

---

To run this program, one should have Node.js version 16 installed as well as node package manager (npm) Inquirer, as the app does consider it "required". One should assure themselves that they are in the directory that requires a README, open an integrated terminal, invoke Node, and run the program with "node index.js".

## Usage

---

Once one has followed the installation guidelines above, they will be able to run the program in the integrated terminal using "node index.js". It will present the user with a question that should be answered withinn the context of a README, since that is where it will be populated. It will continue to present the user with questions which they must then answer, hit return, and answer the next until it runs out. There is one multiple choice question which requires the use of an arrow key to select. Once all questions have been answered, the last "return" will show the file as "Written!" and the user will be able to see the README listed in the folder to the left where they populated it.

![](/initiatenode%20gif.gif)

video that demonstrates full usage:https://drive.google.com/file/d/1qPTPd3FE0DaWaOs_cPn4oAVP8JpF3sJX/view?usp=sharing

## Tests

---

This is a new README section to me that I'm supposed to include but I'm going to be 100% honest, I was not told how to fill out this section nor did I find anything suepr helpful online. I'm thinking that for tests you can run with this code, perhaps you could just run it to see if it works? It works.

## Bugs

---

It wasn't until I already finished that I noticed that the bootcamp documents actually wanted us to include 2 .js files, one was for generating the markdown. I had already created my entire app in one index.js file by the time I noticed and unfortunately, will not have time to re-work it before it is due. Therefore, I may revisit this assignment at a later time in order to utilize the "util" and the second .js file that were given to us. The good news is that the app still works just fine so I consider it a success that I got it to work regardless.

An actual bug is that I did not include any license types other than MIT due to the fact that I do not actually know or use any of the other licenses and we've mostly been recommended to use MIT. So, that is the default license that will show. However, I plan to add other options in the future that will populate the correct license name and badge into the README. If you pick MIT however, it works just fine.

## Questions

---

Please refer any questions to: janicajackson@gmail.com

**GitHub profile:** https://github.com/janicajensen

## Contribution Guidelines

---

If anyone wishes to contribute to this project, they may find the GitHub repository at https://github.com/JanicaJensen/README-generator- and they are welcome to create a fork.

## License

---

This project is covered under the MIT license.
More info can be found by clicking the badge above the description.
