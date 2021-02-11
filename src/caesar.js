// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!encode) shift = shift * -1;
    if (!shift || shift < -25 || shift > 25) return false;

    console.log(shift);
    // array to hold unicode points
    let unicode = [];
    // ignore capital letters
    const deCap = input.toLowerCase();

    // loop through input string
    for (let i = 0; i < deCap.length; i++) {
      // output unicode points
      let charPoint = deCap.charCodeAt(i);

      // if char is letter, then alter it
      // https://www.vertex42.com/ExcelTips/unicode-symbols.html
      if (charPoint > 96 && charPoint < 123) {
        // shift character position
        charPoint += shift;

        // 97 <= valid char values <= 122
        if (charPoint < 97) {
          charPoint += 26;
        } else if (charPoint > 122) {
          charPoint -= 26;
        }
      }
      // push character code (shifted or not) to unicode array
      unicode.push(charPoint);
    }

    // array.map((element, index, array_ref) => {})
    unicode = unicode.map((charCode) => String.fromCharCode(charCode));
    // [97, 99, 105] -> [a, c, h]

    const final = unicode.join("");
    console.log(final);

    return final;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
