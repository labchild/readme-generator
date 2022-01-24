// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//const generateMarkdown = require('utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // project title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title.');
                return false;
            }
        }
    },
    // description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Your README still needs a description.');
                return false;
            }
        }
    },
    // usage
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions for your project. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Your README still needs a Usage section.');
                return false;
            }
        }
    },
    // installation
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to include installation instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instrcutions for your project. (Enclose any code blocks in three back ticks (```).)',
        when: ({ confirmInstallation }) => confirmInstallation,
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Your README still needs installation instructions!');
                return false;
            }
        }
    },
    // license
    {
        type: 'confirm',
        name: 'licenseConfirm',
        message: 'Would you like to include a license for your project?',
        default: true
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to include for your project?',
        choices: ['MIT', 'ISC', 'Unilicense', 'Apache license 2.0', 'Mozilla Public License 2.0', 'GNU GPLv3'],
        when: ({ licenseConfirm }) => licenseConfirm
    },
    // questions/contact
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email to include in the Questions & Contact section. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Your README still needs your contact info.');
                return false;
            }
        }
    },
    // testing
    {
        type: 'confirm',
        name: 'testConfirm',
        message: 'Would you like to include tests?',
        default: false
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any details about testing. (Enclose any code blocks in three back ticks (```).)',
        when: ({ testConfirm }) => testConfirm,
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('You forgot to add details about your project tests.');
                return false;
            }
        }
    },
    // contributing
    {
        type: 'confirm',
        name: 'contributeConfirm',
        message: 'Would you like to include contributors?',
        default: true
    }
];

const promptContribData = projectData => {
    // if add contributors is false, exit inquirer
    if (!projectData.contributeConfirm) {
        return;
    }

    // otherwise prompt for contributor info
    if (!projectData.contributors) {
        projectData.contributors = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'contribName',
            message: "Enter a contributor's name.",
            validate: contribInput => {
                if (contribInput) {
                    return true;
                } else {
                    console.log("Enter a contributor's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribEmail',
            message: "Enter that contributor's email.",
            validate: contribInput => {
                if (contribInput) {
                    return true;
                } else {
                    console.log("Enter a contributor's name.");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddContrib',
            message: 'Would you like to add another contributor?',
            default: false
        }
    ])
        .then(contribData => {
            projectData.contributors.push(contribData);
            if (contribData.confirmAddContrib) {
                return promptContribData(projectData);
            } else {
                return projectData;
            }
        });
};

inquirer.prompt(questions).then(promptContribData).then(answers => console.log('you did it! ' + JSON.stringify(answers)));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // error sends function to catch
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
//init();
