const chalk = require('chalk')
const readlineSync = require('readline-sync')

const randomNumber = Math.floor(Math.random() * 101)
let nbTest = 0

do {
  inputNumber = readlineSync.question('Entrez un nombre entre 0 et 100: ')
}
while (isNaN(Number(inputNumber)))

while (Number(inputNumber) !== randomNumber) {
  nbTest++
  if (nbTest > 1) {
    inputNumber = 'new'
    while (isNaN(Number(inputNumber))) {
      inputNumber = readlineSync.question('Entrez un nombre entre 0 et 100: ')
    }
  }
  Number(inputNumber) > randomNumber ? console.log(chalk.red('Trop grand!')) : console.log(chalk.red('Trop petit!'))
}

console.log(chalk.green(`Bravo! vous avez gagné en ${nbTest} essai${nbTest === 1 ? '' : 's'}\nle nombre à trouver était :${randomNumber}`))
