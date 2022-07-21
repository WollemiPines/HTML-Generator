class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email= email;
    }
    getName(){
      return this.name;
    }
    getId(){
      return this.id;
    }
    getEmail(){
      return this.email;
    }
    getRole(){
      return 'Employee'
    }
}
//const chris = new Employee('Chris', 1, 'example')

module.exports = Employee