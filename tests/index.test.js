import assert from 'node:assert/strict';
import { test } from 'node:test';

import { greet } from '../src/index.js';

const cases = [
  ['returns the default Node.js greeting', undefined, 'Hello Node.js'],
  ['returns a greeting for a custom name', 'World', 'Hello World'],
  ['returns a greeting for an empty string', '', 'Hello '],
  ['returns a greeting for a name with spaces', 'Node JS', 'Hello Node JS'],
  ['returns a greeting for a Chinese name', '世界', 'Hello 世界'],
];

for (const [title, name, expected] of cases) {
  test(`greet ${title}`, () => {
    if (name === undefined) {
      assert.equal(greet(), expected);
      return;
    }

    assert.equal(greet(name), expected);
  });
}
