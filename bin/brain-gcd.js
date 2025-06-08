#!/usr/bin/env node
import BodyBrainGames from '../src/BodyBrainGames.js';

import brainGcd from '../src/games/gcd.js';

const description = 'Find the greatest common divisor of given numbers.'

BodyBrainGames(description, brainGcd);
