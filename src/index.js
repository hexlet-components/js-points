import * as pairs from 'hexlet-pairs';

export const makePoint = (x, y) => pairs.cons(x, y);
export const getX = (point) => pairs.car(point);
export const getY = (point) => pairs.cdr(point);
export const toString = (point) => pairs.toString(point);

export const quadrant = (point) => {
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
