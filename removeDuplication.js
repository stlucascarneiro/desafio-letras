var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', entrada => {
  function verifyDuplication(word) {
    const repetitions = Math.floor(word.length/2)
    let hasDuplication = false
    let duplicationIndex = null

    for (let i = 1; i <= repetitions; i++) {
      if(word.slice(-i) === word.slice(-(i*2), -i)){
        hasDuplication = true
        duplicationIndex = i
      }
    }

    return { hasDuplication, index: duplicationIndex }
  }

  function verifyAllTextDuplication(words) {
    let allWordsAreDuplicated = true
    words.forEach(elem => {
      if(!verifyDuplication(elem).hasDuplication) allWordsAreDuplicated = false
    });
    return allWordsAreDuplicated
  }

  function removeDuplication(words) {
    return words.map(elem => {
      const index = verifyDuplication(elem).index
      return elem.slice(0, -index)
    })
  }

  const words = entrada.split(' ');

  if(verifyAllTextDuplication(words)) {
    const newText = removeDuplication(words).join(" ")
    console.log(`${newText}.`);
  } else {
    console.log(`${entrada}.`);
  }
})