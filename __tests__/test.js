// @ts-check

import {
  makePoint,
  getX,
  getY,
  toString,
  quadrant,
} from '../index.js';

describe('Points', () => {
  it('#makePoint', () => {
    const point = makePoint(3, 4);
    expect(getX(point)).toBe(3);
    expect(getY(point)).toBe(4);
  });

  it('#toString', () => {
    const point = makePoint(10, -10);
    expect(toString(point)).toBe('(10, -10)');
  });

  it('#quadrant', () => {
    expect(quadrant(makePoint(0, 0))).toBeNull();
    expect(quadrant(makePoint(5, 0))).toBeNull();
    expect(quadrant(makePoint(1, 5))).toBe(1);
    expect(quadrant(makePoint(-3, 10))).toBe(2);
    expect(quadrant(makePoint(-2, -5))).toBe(3);
    expect(quadrant(makePoint(4, -1))).toBe(4);
  });
});
