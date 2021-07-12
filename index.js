/*
    09-NodeJS.07-Ins_Functional-Loops
    09-NodeJS.13-Ins_Read-Write-File
    09-NodeJS.15-Ins_Modularization (Use to move test scripts to import.)
    09-NodeJS.17-Ins_npm (Use to declare dependencies and write to file.)
    09-NodeJS.19-Ins_Inquirer-Demo (Use to get input from user.)
*/

//  Import Dependencies
/* 
    In the README add instructions on running the following command line first
        > npm init
        > npm i inquirer
        > node index.js
*/

    const fs = require('fs');
    const npm = require('npm');
    const inquirer = require('inquirer');

    inquirer
      .prompt([
        {
            type: 'input',
            message: "What is the employee's first name?",
            name: 'firstName',
        },
        {
            type: 'input',
            message: "What is the employee's job description?",
            name: 'role',
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
            type: 'input',
            message: "What is the assigned office number?",
            name: 'officeId',
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
      .then((response) =>
        response.name != null
          ? console.log('Success!')
          : console.log('You must add a name.')
      );

// Accept User Input
    fs.writeFile("package.json", process.argv[1], function(err){
        if(err){
            return console.log(err);
        } console.log("Success! " + process.argv[1]);
    });

// TDD
    // console.log(process.argv);
    // console.log(process.argv[1]);

/*
    GIVEN a command-line application that accepts user input
    WHEN I am prompted for my team members and their information
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

// Employees Array and its Properties
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
 
/*  Employees Array and its Properties

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