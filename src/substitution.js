// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//const alphabet = { ' ':'#','a':'q', 'b':'w', 'c':'e', 'd':'r', 'e':'t', 'f':'y', 'g':'u', 'h':'i', 'i':'o', 'j':'p', 'k':'[', 'l':']', 'm':';', 'n':'&', 'o':'?', 'p':'@', 'q':'%', 'r':'g', 's':'>', 't':'*', 'u':'+', 'v':'^', 'w':'<', 'x':'d', 'y':'b', 'z':'a'}

const substitutionModule = (function () {
    
  function substitution(input, alphabet, encode = true) {
    
    if (!alphabet || alphabet.length < 26 || alphabet.length > 26) return false;
    for (let i = 0; i < alphabet.length; i++) {
      const letter = alphabet[i];
      const counter = (i + 1);
      for (let j = counter; j < alphabet.length; j++) {
        if (letter === alphabet[j]) return false;
      }
    }

    let alphaStandard = {'a':0,'b':1,'c':2,'d':3,'e':4,'f':5,'g':6,'h':7,'i':8,
                          'j':9,'k':10,'l':11,'m':12,'n':13,'o':14,'p':15,'q':16,'r':17,
                          's':18,'t':19,'u':20,'v':21,'w':22,'x':23,'y':24,'z':25,}
    input.toLowerCase();

    let alphaCode = {};

    const alpha = alphabet.split('');

    for (let key of alpha) {
      const alphaTemp = alpha.indexOf(key);
      alphaCode[key] = alphaTemp;
    }
    
    const alphaArr = Object.keys(alphaStandard);

    const message = input.split('');

    let output;

    const alphaIndex = {};

    if (encode) {

      output = message.map((char) => {
        if (alphaArr.includes(char)) {
        let nextIndex = alphaStandard[char];
      
        return alpha[nextIndex];
        }
        return char;
      });

     } else {

      output = message.map((char) => {
        if (alpha.includes(char)) {
        let nextIndex = alpha.indexOf(char);
      
        return alphaArr[nextIndex];
        }
        return char;
      });
     }
    console.log(output.join(''));
    return output.join('');

    


  }

  return {
    substitution,
  };
})();

// scrap code



module.exports = substitutionModule.substitution;
