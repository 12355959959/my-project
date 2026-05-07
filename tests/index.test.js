import assert from 'node:assert/strict';
import { test } from 'node:test';

import { greet } from '../src/index.js';

test('greet returns the default Node.js greeting', () => {
  assert.equal(greet(), 'Hello Node.js');
});

test('greet returns a greeting for the provided name', () => {
  assert.equal(greet('World'), 'Hello World');
});
