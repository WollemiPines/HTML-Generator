
const Intern = require("../lib/intern.js");

describe("intern class", () => {
  describe("getName method", () => {
    it("gets intern name", () => {
      let intern = new Intern("Bob", 5, 'Bob@email.com', 'School Name!');
      expect(intern.getName()).toBe('Bob');
    });
    it("gets intern id", () => {
        let intern = new Intern("Bob", 5, 'Bob@email.com', 'School Name!');
        expect(intern.getId()).toBe(5);
      });
    it("gets intern email", () => {
    let intern = new Intern("Bob", 5, 'Bob@email.com', 'School Name!');
    expect(intern.getEmail()).toBe('Bob@email.com');
    });
    it("gets intern school", () => {
        let intern = new Intern("Bob", 5, 'Bob@email.com', 'School Name!');
        expect(intern.getSchool()).toBe('School Name!');
        });
    it("gets intern role", () => {
    let intern = new Intern("Bob", 5, 'Bob@email.com', 'School Name!');
    expect(intern.getRole()).toBe('Intern');
    });
});
});