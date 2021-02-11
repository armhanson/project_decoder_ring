const { italic } = require("chalk");
const caesar = require("../src/caesar");

// Write your tests here!
const expect = require("chai").expect;

// describe what is being tested

describe("caesar function", () => {
  it("should return a string value when inputs are valid", () => {
    let actual = caesar(
      "Did you hear about Pluto? That's messed up, right?",
      5
    );
    expect(actual).to.be.a("string");
  });
  // should encode a given string based on shift parameter when encode value is true
  it("should encode a given string based on shift parameter when encode value is true", () => {
    expect(caesar("Be cautious and encode this sensitive msg.", -7)).to.equal(
      "ux vtnmbhnl tgw xgvhwx mabl lxglbmbox flz."
    );
  });
  // should decode a given string based on shift parameter when encode value is false
  it("should decode a given string based on shift parameter when encode value is false", () => {
    let decoded = caesar("znoy zgvk oy ykrl-jkyzxaizotm tuc.", 6, false);
    expect(decoded).to.equal("this tape is self-destructing now.");
  });

  it("should decode a given string based on shift parameter when encode value is false", () => {
    let decoded = caesar("this tape is self-destructing now.", 6);
    expect(decoded).to.equal("znoy zgvk oy ykrl-jkyzxaizotm tuc.");
  });
});
