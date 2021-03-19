const readlineSync = require('readline-sync')
let questionnaire = [["1", "Le C++ est un :", "Language", "Compilateur", 1],
["2", "TypeScript est une évolution de Javascript", "Vrai", "Faux", 1],
["3", "Lire les cours avant de faire les exercices est inutile", "Vrai", "Faux", 2],
["4", "React.js a été developpé par Google", "Vrai", "Faux", 2],
["5", "Ethereum est une blockchain publique", "Vrai", "Faux", 1]
]

let score = 0

for (elem of questionnaire) {
  do {
    inputAnswer = readlineSync.question(`Question${elem[0]} : ${elem[1]}\n1: ${elem[2]}\n2: ${elem[3]}\nVotre réponse? `)
  }
  while (inputAnswer !== '1' && inputAnswer !== '2')
  if (Number(inputAnswer) === elem[4])
    score++
  inputAnswer = 'new'
}
console.log(`Vous avez : ${score} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''}`)
