import assert from 'assert';
import { makePoint, getX, getY, toString, quadrant } from './src/index.js';

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

  it('#quadrant', () => {
    assert.equal(quadrant(makePoint(0, 0)), undefined);
    assert.equal(quadrant(makePoint(5, 0)), undefined);
    assert.equal(quadrant(makePoint(1, 5)), 1);
    assert.equal(quadrant(makePoint(-3, 10)), 2);
    assert.equal(quadrant(makePoint(-2, -5)), 3);
    assert.equal(quadrant(makePoint(4, -1)), 4);
  });
});
