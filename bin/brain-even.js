#!/usr/bin/env node
import BodyBrainGames from '../src/BodyBrainGames.js';
import task from '../src/games/even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

BodyBrainGames(description, task);
