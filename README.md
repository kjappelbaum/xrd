# xrd

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![npm download][download-image]][download-url]

Read XRD patterns and convert Bruker raw data to jcamp.

## Installation

`$ npm i xrd`

## Usage

```js
import Pattern from 'xrd';

let pattern = Pattern.fromJcamp(jcamp);

let data = pattern.get(); // default to 'twotheta'

let jcamp = pattern.toJcamp();
```

## [API Documentation](https://cheminfo.github.io/xrd/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/xrd.svg
[npm-url]: https://www.npmjs.com/package/xrd
[ci-image]: https://github.com/cheminfo/xrd/workflows/Node.js%20CI/badge.svg?branch=master
[ci-url]: https://github.com/cheminfo/xrd/actions?query=workflow%3A%22Node.js+CI%22
[download-image]: https://img.shields.io/npm/dm/xrd.svg
[download-url]: https://www.npmjs.com/package/xrd
