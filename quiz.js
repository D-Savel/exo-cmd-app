const readlineSync = require('readline-sync')
let answerTab = {
  Question1: 1, Question2: 1, Question3: 2, Question4: 2, Question5: 1
}

const inputAnswer1 = readlineSync.question("Question 1 : le C++ est un :\n1: Language\n2: Compilateur\nEntrez votre réponse")
const inputAnswer2 = readlineSync.question("Question 2: TypeScript est une évolution de Javascript: \n1: Vrai\n2: Faux")