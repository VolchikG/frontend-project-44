#!/usr/bin/env node
import BodyBrainGames from '../src/BodyBrainGames.js'
import brainProgression from '../src/games/progression.js'

const description = 'What number is missing in the progression?'

BodyBrainGames(description, brainProgression)
