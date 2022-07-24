
const Engineer = require("../lib/Engineer.js");

describe("Engineer class", () => {
  describe("getName method", () => {
    it("gets engineer name", () => {
      let engineer = new Engineer("Bob", 5, 'Bob@email.com', 'exampleGitHub');
      expect(engineer.getName()).toBe('Bob');
    });
    it("gets engineer id", () => {
        let engineer = new Engineer("Bob", 5, 'Bob@email.com', 'exampleGitHub');
        expect(engineer.getId()).toBe(5);
      });
        it("gets engineer gitHub", () => {
            let engineer = new Engineer("Bob", 5, 'Bob@email.com', 'exampleGitHub');
            expect(engineer.getGitHub()).toBe('exampleGitHub');
          });
          it("gets engineer role", () => {
            let engineer = new Engineer("Bob", 5, 'Bob@email.com', 'exampleGitHub');
            expect(engineer.getRole()).toBe('Engineer');
          });
        });
      });
     
    