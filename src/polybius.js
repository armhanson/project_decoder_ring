// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  function polybius(input, encode = true) {
    const msgVals = [];
    if (!encode) {
      const compare = input.split(" ");
      const digits = compare.join("");
      if (!(digits.length % 2 == 0)) return false;
      // array to collect character pairs
      const pairs = [];
      // array to hold and push strings of character pairs into 'pairs'
      let temp = [];
      // pair characters from input for later matching to 'alphabet' object
      for (let index in input) {
        if (input[index] == " ") {
          pairs.push(input[index]);
        } else {
          temp.push(input[index]);
          if (temp.length > 1) {
            const interim = temp.join("");
            pairs.push(interim);
            temp = [];
          }
        }
      }
      // create message to return
      for (let char of pairs) {
        // ensure spaces are left as they are in returned message
        if (char == " ") {
          msgVals.push(" ");
        }
        for (let letter in alphabet) {
          if (char == alphabet[letter]) {
            msgVals.push(letter);
          }
        }
      }
      console.log(msgVals);
      return msgVals.join("");
    }

    if (encode) {
      const message = input.toLowerCase();

      for (let i = 0; i < message.length; i++) {
        // ensure spaces are left as they are in returned message
        if (message[i] == " ") {
          msgVals.push(" ");
        }
        for (const property in alphabet) {
          if (message[i] === property) {
            msgVals.push(alphabet[property]);
          }
        }
      }
      console.log(msgVals);
      console.log(msgVals.join(""));
      return msgVals.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
