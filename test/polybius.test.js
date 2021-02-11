const polybius = require("../src/polybius");
const expect = require("chai").expect;

// Write your tests here!
describe("polybius function", () => {
  // test if function returns false
  it("should include letters and spaces only", () => {
    const range = [32];
    for (let i = 97; i < 123; i++) {
      range.push(i);
    }
    // looping through polybius function output
    for (let key in polybius) {
      for (let within in range) {
        expect(polybius.charCodeAt(key)).to.be(range(within));
      }
    }
  });

  it("should return a string value when inputs are valid", () => {
    let actual = polybius("testing testing one two three");
    expect(actual).to.be.a("string");
  });

  it("should encode a given string using code values when encode value is true", () => {
    expect(polybius("encode this message")).to.equal("513331434151 44324234 23513434112251");
  });

  it("should decode a given string using code values when encode value is false", () => {
    expect(polybius("415131434151 44324234 23513434112251", false)).to.equal("decode thijs message");
  });

  it("input string to be decoded should have even number of characters, not counting spaces", () => {
    expect(polybius("125243152 4135", false)).to.equal(false);
  });
});
const alphabet = {
    "a": 11,
    "b": 21,
    "c": 31,
    "d": 41,
    "e": 51,
    "f": 12,
    "g": 22,
    "h": 32,
    "i": 42,
    "j": 42,
    "k": 52,
    "l": 13,
    "m": 23,
    "n": 33,
    "o": 43,
    "p": 53,
    "q": 14,
    "r": 24,
    "s": 34,
    "t": 44,
    "u": 54,
    "v": 15,
    "w": 25,
    "x": 35,
    "y": 45,
    "z": 55,
  };
// OLD ALPHA OBJECT
// const alphabet = {
//     00: " ",
//     11: "a",
//     21: "b",
//     31: "c",
//     41: "d",
//     51: "e",
//     12: "f",
//     22: "g",
//     32: "h",
//     42: ("i", "j"),
//     52: "k",
//     13: "l",
//     23: "m",
//     33: "n",
//     43: "o",
//     53: "p",
//     14: "q",
//     24: "r",
//     34: "s",
//     44: "t",
//     54: "u",
//     15: "v",
//     25: "w",
//     35: "x",
//     45: "y",
//     55: "z",
//   };