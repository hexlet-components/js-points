import * as pairs from 'hexlet-pairs';

export const makePoint = (x, y) => pairs.cons(x, y);
export const getX = (point) => pairs.car(point);
export const getY = (point) => pairs.cdr(point);
export const toString = (point) => pairs.toString(point);
