const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution function", () => {


    it("should return a string value when inputs are valid", () => {
      let actual = substitution("testing testing", "$wae&zrdxtfcygvuhbijnokmpl");
      expect(actual).to.be.a('string');
    });

    it("should return false when alphabet parameter exceeds 26 characters", () => {
        expect(substitution("hello", "$wae&zrdxtfcygvuhbijnokmpl&*")).to.be.false;
    })

    it("should return false when alphabet parameter is less than 26 characters", () => {
        expect(substitution("hello", "$wae&zrdxtfcygvuhbijnokm")).to.be.false;
    })
  
    it("should encode a given string based on alphabet parameter when encode value is true", () => {
      expect(substitution("encode this message", "$wae&zrdxtfcygvuhbijnokmpl")).to.equal("&gave& jdxi y&ii$r&");
    })

    it("should decode a given string based on alphabet parameter when encode value is false", () => {
      expect(substitution("&gave& jdxi y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.equal("encode this message");
    });
  });
  