const pyramid = (nbCharBase, char) => {
  for (let index = 1; index <= nbCharBase; index++) {
    console.log(char.repeat(index))
  }
}

if (process.argv.length !== 4) {
  console.log('usage (invalid number argument): node pyramide.js nbCharBasePyramid charForDrawPyramid')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`invalid argument: The arg 1(nbCharBasePyramid) = ${process.argv[2]} is not a number`)
  process.exit(1)
}

if (process.argv[3].length > 1) {
  console.log(`error: The arg 2(charForDrawPyramid) = ${process.argv[3]} contain more than one char`)
  process.exit(1)
}

let nbCharBase = Number(process.argv[2])
let char = process.argv[3]

pyramid(nbCharBase, char)