const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "title of project (required)",
            validate: nameInput => {
                if (nameInput) {
                    console.log(nameInput)
                    return true;
                } else {
                    console.log("Please enter a title")
                    return false;
                }
            }
        }
    ])
    // .then(x => console.log(x))