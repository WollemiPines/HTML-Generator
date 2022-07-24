
const Employee = require("../lib/Employee.js");

describe("Employee class", () => {
  describe("getName method", () => {
    it("gets employee name", () => {
      let employee = new Employee("Bob", 5, 'Bob@email.com');
      expect(employee.getName()).toBe('Bob');
    });
      });
  describe("getId method", () => {
    it("gets employee id", () => {
      let employee = new Employee("Bob", 5, 'Bob@email.com');
      expect(employee.getId()).toBe(5);
    });
      });
  describe("getEmail method", () => {
    it("gets employee email", () => {
      let employee = new Employee("Bob", 5, 'Bob@email.com');
      expect(employee.getEmail()).toBe('Bob@email.com');
    });
      });
  describe("getRole method", () => {
    it("gets employee role", () => {
      let employee = new Employee("Bob", 5, 'Bob@email.com');
      expect(employee.getRole()).toBe('Employee');
    });
      });
});
    