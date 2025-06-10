#!/usr/bin/env node
import BodyBrainGames from '../src/BodyBrainGames.js'
import brainPrime from '../src/games/prime.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

BodyBrainGames(description, brainPrime)
