// @flow

import * as pairs from 'hexlet-pairs';

/**
 * Make point
 */
export const makePoint = (x, y) => pairs.cons(x, y);

/**
 * Get X
 */
export const getX = point => pairs.car(point);

/**
 * Get Y
 */
export const getY = point => pairs.cdr(point);

/**
 * Convert point to string
 */
export const toString = point => pairs.toString(point);

/**
 * Determine quadrant for given point
 */
export const quadrant = point => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  }
};
