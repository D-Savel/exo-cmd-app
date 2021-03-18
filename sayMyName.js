if (process.argv.length !== 3) {
  console.log('usage: node sayMyName.js votre_Nom')
  process.exit(1)
}
console.log(`My name is ${process.argv[2]}`)