import assert from 'assert';
import { makePoint, getX, getY, toString } from './index.js';

describe('Points', () => {
  it('#makePoint', () => {
    const point = makePoint(3, 4);
    assert.equal(getX(point), 3);
    assert.equal(getY(point), 4);
  });

  it('#toString', () => {
    const point = makePoint(10, -10);
    assert.equal(toString(point), '(10, -10)');
  });
});
