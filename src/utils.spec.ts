import assert from 'assert';

import { reverseDigits } from './utils';

describe('digits', function() {
  it('should array of digits in a reverse order', function() {
    assert.deepStrictEqual(reverseDigits(3791), [1, 9, 7, 3]);
  });
});