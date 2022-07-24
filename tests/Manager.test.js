
const Manager = require("../lib/manager.js");

describe("manager class", () => {
  describe("getName method", () => {
    it("gets manager name", () => {
      let manager = new Manager("Bob", 5, 'Bob@email.com', '17');
      expect(manager.getName()).toBe('Bob');
    });
    it("gets manager id", () => {
        let manager = new Manager("Bob", 5, 'Bob@email.com', '17');
        expect(manager.getId()).toBe(5);
      });
    it("gets manager email", () => {
    let manager = new Manager("Bob", 5, 'Bob@email.com', '17');
    expect(manager.getEmail()).toBe('Bob@email.com');
    });
    it("gets manager school", () => {
        let manager = new Manager("Bob", 5, 'Bob@email.com', '17');
        expect(manager.getOfficeNumber()).toBe('17');
        });
    it("gets manager role", () => {
    let manager = new Manager("Bob", 5, 'Bob@email.com', '17');
    expect(manager.getRole()).toBe('Manager');
    });
});
});