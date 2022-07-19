const inquirer = require("inquirer");
const fs = require('fs');

const promptUserManager = () => {
    return  inquirer.prompt([  
    {
        type: 'input',
        name: 'name',
        message: 'Name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Id:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github:',
    },]
    )};

// class Employee {
//     constructor(name, id, email) {
//       this.name = name;
//       this.id = id;
//       this.email= email;
//     }

// getName(){
// $(this.name)
// }

// getId(){
// $(this.id)
// }

// getEmail(){
// $(this.email)
// }

// getRole(){

// }

// }

// `&mdash;returns 'Employee'`

// class Manager extends Employee {
//     }


const promptUserRole = () => {
     inquirer.prompt([  
    {
        type: 'checkbox',
        message: 'Role?',
        name: 'role',
        choices: ['Engineer', 'Intern'],
    },]
    )
    if(role == 'Engineer'){
        return  inquirer.prompt([   
            {
            type: 'input',
            name: 'name',
            message: 'Name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Github:',
        },]
        )
    }
    if (role == 'Intern'){
        return  inquirer.prompt([  
            {
            type: 'input',
            name: 'name',
            message: 'Name:',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Id:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email:',
        },
        {
            type: 'input',
            name: 'school',
            message: 'School Name:',
        },]
        ) 
    }
};

const genHTML=({name, id, email, github, role})=>
    `
    <!doctype html>
<html>
<head>
<title>HTML Generator</title>
<meta name="description" content="HTML Gen">
</head>
<body>
${name}
${id}
${email}
${github}
${role}
</body>
</html>
    `;


const init = () => {
promptUserManager()
.then(promptUserRole())

    .then((responses) => fs.writeFileSync('HTML_response.html', genHTML(responses)))
    .then(() => console.log('Successfully wrote to HTML_response.html'))
    .catch((err) => console.error(err));
};

init();