import readlineSync from 'readline-sync'
import StartBG from './cli.js'

const BodyBrainGames = (description, taskFunc) => {
  const playerName = StartBG()
  console.log(description)
  let mark = 0
  for (let i = 1; i <= 3; i += 1) {
    const step = taskFunc()

    console.log(`Question: ${step[0]}`)
    const answer = readlineSync.question('Answer: ')

    if (answer === step[1]) {
      console.log('Correct!')
      mark += 1
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${step[1]}'.`)
      console.log(`Let's try again, ${playerName}!\n`)
      break
    }
  }
  if (mark === 3) {
    console.log(`Congratulations, ${playerName}!`)
  }
}

export default BodyBrainGames
