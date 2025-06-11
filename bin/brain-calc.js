#!/usr/bin/env node
import BodyBrainGames from '../src/BodyBrainGames.js'
import BrainCalc from '../src/games/calc.js'

const description = 'What is the result of the expression?'

BodyBrainGames(description, BrainCalc)
