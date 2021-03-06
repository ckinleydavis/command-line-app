/*  REMAINING TODO
    THEN an HTML file is generated that displays a nicely formatted team roster based on user input
    WHEN I click on an email address in the HTML
    THEN my default email program opens and populates the TO field of the email with the address
    WHEN I click on the GitHub username
    THEN that GitHub profile opens in a new tab
    WHEN I start the application
    THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    WHEN I enter the team manager’s name, employee ID, email address, and office number
    THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    WHEN I select the engineer option
    THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    WHEN I select the intern option
    THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    WHEN I decide to finish building my team
    THEN I exit the application, and the HTML is generated
*/

/*  In the README add instructions on running the following command line first
        > npm install                               (To install npm in order to install dependencies and run command line app correctly.)
        > npm init                                  (To initialize package.json and create package-lock.json.)
        > npm i inquirer                            (To accept user answers to questions.)
        > node index.js                             (To run command line application.)
        > rm -rf node_modules package-lock.json     (To remove npm installation if need to start over.)
*/

/*  REFERENCES
    09-NodeJS.07-Ins_Functional-Loops
    09-NodeJS.13-Ins_Read-Write-File
    09-NodeJS.15-Ins_Modularization (Use to move test scripts to import.)
    09-NodeJS.17-Ins_npm (Use to declare dependencies and write to file.)
    09-NodeJS.19-Ins_Inquirer-Demo (Use to get input from user.)
    10-OOP.11-Ins-TDD (Use to create TDD Mod [i.e. index.test.js])
    10-OOP.15-Ins_Organizing-Tests
*/

// Import Dependencies

const fs = require('fs');
//console.log(process.argv);
//console.log(process.argv[1]);

const inquirer = require('inquirer');

// Accept User Input
inquirer
    .prompt([
    {
        type: 'input',
        message: "What is the employee's first name?",
        name: 'firstName',
    },
    {
        type: 'list',
        message: "What is the employee's job description?",
        name: 'role',
        choices: ['Manager', 'Developer', 'Sales'],
    },
    {
        type: 'input',
        message: "What is the employer identification number?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the employee's email address?",
        name: 'email',
    },
    {
        type: 'checkbox',
        message: "What is the assigned office number?",
        name: 'officeId',
        choices: ['001', '003', '007', '010'],
    },
    {
        type: 'input',
        message: "What is the github handle?",
        name: 'github',
    },
    {
        type: 'input',
        message: "What school does/did the employee attend?",
        name: 'school',
    },
    ])
    .then((response) => { // TODO: Research how to add all employee info to one json file rather than multiple
    const filename = `${response.firstName.toLowerCase().split(' ').join('')}.json`;

    // Write package.json file
    fs.writeFile(
        filename, 
        JSON.stringify(response, null, '\t'), 
        (err) => err ? console.log(err) : console.log('Success!')
    );
    });

/*  Accept User Input (Testing)

    // TDD1

*/

////////////////////////////////////////////////////////////////////
// CODE TO IGNORE - USED DURING BEGINNING OF DEV PROCESS
////////////////////////////////////////////////////////////////////

// Employees Array and its Properties
/*
    var employees = [
        {
            firstName: "Carla",
            role: "Developer",
            id: 2,
            email: "ckinleydavis@gmail.com",
            officeId: 1,
            github: "ckinleydavis",
            school: "The Ohio State University",
            // Function to Bind 'this' to the Employee Object and its Properties
            sayHello: function() {
                console.log("Hello " + this.firstName + "!");
            }
        },
        {
            firstName: "Jerry",
            role: "Manager",
            id: 1,
            email: "jkinley20@gmail.com",
            officeId: 1,
            github: "jkinley",
            // Function to Bind 'this' to the Employee Object and its Properties
            sayHello: function() {
                console.log("Hello " + this.firstName + "!");
            }
        }
    ];
*/
 
/*  Employees Array and its Properties (Testing)

    // TDD1
    console.log(employees);

    // TDD2
    employees.forEach(employee => employee.sayHello());

    // TDD3
    const emailAddress = employees.filter(
        function(employee) {
            return employee.email == "ckinleydavis@gmail.com";
        }
    ); console.log(emailAddress);
*/

////////////////////////////////////////////////////////////////////
// CODE TO IGNORE - USED DURING BEGINNING OF DEV PROCESS
////////////////////////////////////////////////////////////////////

/*  Employee Object and its Properties

    var employee = {
        firstName: "Carla",
        role: "Developer",
        id: 2,
        email: "ckinleydavis@gmail.com",
        officeId: 1,
        github: "ckinleydavis",
        school: "The Ohio State University",
        // Function to Bind 'this' to the Employee Object and its Properties
        sayHello: function() {
            console.log("Hello " + this.firstName + "!");
        }
    } 
*/

/*  Employee Object and its Properties

    // TDD1
    console.log(employee);

    // TDD2
    employee.sayHello();
*/