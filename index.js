const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const employeeArr = [];

// createManager asks for user input from the commandline and populates the manager class.
const createManager = () => {
    console.log("please enter the team managers details:");
    return  inquirer.prompt([  
    {
        type: 'input',
        name: 'name',
        message: 'Name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Id: (interger)',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'Office Number:',
    },]
    )

    .then(({name, id, email, officeNum}) => {
        const manager = new Manager(name, id, email, officeNum)
        employeeArr.push(manager);
        console.log(employeeArr)

        // After details are gathered and pushed, it runs promptUserRole
        promptUserRole();
    })
};

// function to ask if more team members are to be added and switch statement to excute descision.
const promptUserRole = () => {
     return inquirer.prompt([  
    {
        type: 'list',
        message: 'Add another team member or finish?',
        name: 'role',
        choices: ['Engineer', 'Intern', 'Finish'],
    },]
    ).then((choice) => {
        switch (choice.role){
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                 createIntern();
                  break;
            case 'Finish':
                  buildTeam();
                break;
            default:
                  buildTeam();
        }
    })
};

// createEngineer asks for user input from the commandline and populates the engineer class.
const createEngineer = () => {
    console.log("please enter the engineers details:");
    return  inquirer.prompt([  
    {
        type: 'input',
        name: 'name',
        message: 'Name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Id: (interger)',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Github Acc:',
    },]
    )    .then(({name, id, email, gitHub}) => {
        const engineer = new Engineer(name, id, email, gitHub)
        employeeArr.push(engineer);
        console.log(employeeArr)
        promptUserRole();
    })
};

// createIntern asks for user input from the commandline and populates the intern class.
const createIntern = () => {
    console.log("please enter the intern's details:");
    return  inquirer.prompt([  
    {
        type: 'input',
        name: 'name',
        message: 'Name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Id: (interger)',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'School:',
    },]
    )    .then(({name, id, email, school}) => {
        const intern = new Intern(name, id, email, school)
        employeeArr.push(intern);
        console.log(employeeArr)
        promptUserRole();
    })
};

// buildTeam takes the result of genHTML and writes it to a file called HTML_response.html
const buildTeam = () => {
fs.writeFileSync('./dist/HTML_response.html', genHTML(employeeArr), (err) => {
    if (err) throw err;
    console.log("build succeeded")
}) 
}

// genHTML takes input data and checks it for constant properites, then writes it to realivent parts of an HTML file
const genHTML = (data) => {
console.log(data);
    return `
<!doctype html>
<html>
<head>
<title>HTML Generator</title>
<meta name="description" content="HTML Gen">
<link rel="stylesheet" href="./CSS/reset.css" />
<link rel="stylesheet" href="./CSS/style.css" />
</head>
<div id="header">
<h1> ${ data.map((employee) => {if (employee.getRole() == "Manager")
{return `${employee.getName()} 's Development Team`}}).join("")} </h1>
</div>
<body>
<div class="bodydouble">
    
${ data.map((employee) => {
    console.log(employee)
    if(employee.getRole() == 'Manager' ){
        return `
        <div class="card">
        <h2> ${employee.getRole()} </h2>
        <div class="cardDetails">
        <ul>
        <li> ${employee.getName()} </li>
        <li> ${employee.getId()} </li>
        <li> <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a> </li>
        <li> ${employee.getOfficeNumber()} </li>
        </ul>
        </div>
        </div>
        `
    } else if (employee.getRole() == 'Intern' ){
        return `
        <div class="card">
        <h2> ${employee.getRole()} </h2>
        <div class="cardDetails">
        <ul>
        <li> ${employee.getName()} </li>
        <li> ${employee.getId()} </li>
        <li> <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a> </li>
        <li> ${employee.getSchool()} </li>
        </ul>
        </div>
        </div>
        `
    }else if (employee.getRole() == 'Engineer' ){
        return `
        <div class="card">
        <h2> ${employee.getRole()} </h2>
        <div class="cardDetails">
        <ul>
        <li> ${employee.getName()} </li>
        <li> ${employee.getId()} </li>
        <li> ${employee.getEmail()} </li>
        <li> ${employee.getGitHub()} </li>
        </ul>
        </div>
        </div>
        `
    }
}).join("")}
    
</div>
</body>
</html>
    
`}

// init holds all functions to begin the program, only createManger runs at the moment, so its a little superflous
const init = () => {
createManager()
};

init();