const index = require("../index");
const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("getName method", () => {
    it("gets employee name", () => {
      const employee = new Employee("Employee", [
        { name: "Bob", id: 5, email: 'Bob@email.com' }
      ]);
      employee.getName();
      expect(employee.getName()).toBe('Bob');
    });
   
      });
    });
    