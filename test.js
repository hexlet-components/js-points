import assert from 'assert';
import { makePoint, getX, getY } from './index.js';

describe('Pairs', () => {
  it('should works', () => {
    const pair = makePoint(3, 4);
    assert.equal(getX(pair), 3);
    assert.equal(getY(pair), 4);
  });
});
