const chalk = require('chalk')
const readlineSync = require('readline-sync')
let isRightInput = true
let input = ''
let inputTable = []

if (process.argv.length !== 3) {
  console.log('usage (doit contenir un argument): node InterMajorityTest.js Age_de_majorite')
  process.exit(1)
}
if (isNaN(process.argv[2])) {
  console.log("l'argument Age_de_majorite doit être un nombre")
  process.exit(1)
}
let majorityAge = process.argv[2]

do {
  input = readlineSync.question('Entrez votre nom, prénom et votre age (Format de saisie :  Nom,Prénom,Age) :')
  let nbcomma = 0

  for (let index = 0; index < input.length; index++) {
    if (input[index] === ',')
      nbcomma += 1
  }
  if (nbcomma !== 2) {
    console.log("Entrée invalide : Les valeurs saisies doivent être séparée d'une virgule (Nom,Prénom,Age)")
    isRightInput = false
  }
  inputTable = input.split(',')

  if (!isNaN(inputTable[0]) || !isNaN(inputTable[1])) {
    console.log("Entrée invalide : entrez une chaine de caractère et non un nombre pour le nom ou le prénom")
    isRightInput = false
  }

  if (isNaN(Number(inputTable[2]))) {
    console.log("Entrée invalide : entrez un nombre pour saisir votre age")
    isRightInput = false
  }

} while (!isRightInput)

let [name, surname, age] = inputTable
console.log(age)
age < majorityAge ? console.log(chalk.red(`Désolé, ${name} ${surname} vous êtes mineur, vous ne pouvez pas voter`))
  : console.log(chalk.green(`${name} ${surname} vous êtes majeur, vous pouvez voter`))