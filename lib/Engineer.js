const Employee = require("./Employee");
// Extending Employee constructor. Adds the following to it
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }
    getGithub () {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}
module.exports = Engineer; 