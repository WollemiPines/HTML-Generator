const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const employeeArr = [];

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
        promptUserRole();
    })
};


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

// const employeeArrNew =  employeeArr.json.stringify();


const buildTeam = () => {
fs.writeFileSync('./dist/HTML_response.html', genHTML(employeeArr), (err) => {
    if (err) throw err;
    console.log("build succeeded")
}) 
}


const genHTML = (data) => {
console.log(data);
    return `
<!doctype html>
<html>
<head>
<title>HTML Generator</title>
<meta name="description" content="HTML Gen">
</head>
<body>
    
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
        <li> ${employee.getEmail()} </li>
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
        <li> ${employee.getEmail()} </li>
        <li> ${employee.getSchool()} </li>
        </ul>
        </div>
        </div>
        `
    }else if (employee.getRole() == 'Engineer' ){
        return `
        Engineer
        `
    }
})}
    
</body>
</html>
    
`}

const init = () => {
createManager()

    // .then((responses) => fs.writeFileSync('HTML_response.html', genHTML(responses)))
    // .then(() => console.log('Successfully wrote to HTML_response.html'))
    // .catch((err) => console.error(err));
};

init();