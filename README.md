# js-points

[![github action status](https://github.com/hexlet-components/js-points/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-components/js-points/actions)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/hexlet-components/js-points/blob/master/index.js)

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

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=js-points)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet (in Russian)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=js-points).
