const pyramid = (nbCharBase, char) => {
  for (let index = 1; index <= nbCharBase; index++) {
    console.log(char.repeat(index))
  }
}
const reversePyramid = (nbCharBase, char) => {
  for (let index = nbCharBase; index > 0; index--) {
    console.log(char.repeat(index))
  }
}

if (process.argv.length > 5 || process.argv.length < 3) {
  console.log("usage (invalid number argument): node pyramide.js nbCharBasePyramid charForDrawPyramid option: -r")
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`invalid argument: The arg 1(nbCharBasePyramid) = ${process.argv[2]} is not a number`)
  process.exit(1)
}

if (process.argv.length === 5 && process.argv[4] !== '-r') {
  console.log("invalid argument: The arg 3 must be equal -r")
  process.exit(1)
}

if (process.argv[3].length > 1) {
  console.log(`error: The arg 2(charForDrawPyramid) = ${process.argv[3]} contain more than one char`)
  process.exit(1)
}

let nbCharBase = Number(process.argv[2])
let char = process.argv[3]

if (process.argv[4] === '-r')
  reversePyramid(nbCharBase, char)
else
  pyramid(nbCharBase, char)
