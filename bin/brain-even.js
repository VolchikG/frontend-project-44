#!/usr/bin/env node
import BodyBrainGames from '../src/BodyBrainGames.js';
import BrainEven from '../src/games/even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

BodyBrainGames(description, BrainEven);
