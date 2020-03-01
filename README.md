# js-points

[![github action status](https://github.com/hexlet-components/js-points/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-components/js-points/actions)

## Install

```sh
npm install @hexlet/points
```

## Usage example

```javascript
import {
  makePoint, getX, getY, toString, quadrant,
} from '@hexlet/points';

const point = makePoint(4, 5);
toString(point); // (4, 5)

getX(point); // 4
getY(point); // 5

quadrant(point); // 1
```

For more information, see the [Full Documentation](https://github.com/hexlet-components/js-points/tree/master/docs)
