# @hckrnews/geolocation

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-stats] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Codecov Status][codecov-image]][codecov-url] [![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url]

Geolocation helper for find location in a range

## Sponsors :tada:

If it has saved you development time, please consider [sponsoring the project](https://github.com/sponsors/w3nl)
with GitHub sponsors!

But me a coffee/book: https://www.buymeacoffee.com/hckrnews
Or on patreon: https://patreon.com/w3news

## Example usage


```javascript
import { filterLocationsOnDistance } from '@hckrnews/geolocation';

// My position coords
const coords: {
  latitude: 52.12265270227936,
  longitude: 5.575334785130014
}

// Distance to swarch within
const distance = 12000

// Some example locations
const locations = [
  {
    name: 'Location 1',
    location: {
      latitude: 52.045934,
      longitude: 6.102895
    }
  },
  {
    name: 'Location 2',
    location: {
      latitude: 52.17306,
      longitude: 5.434552
    }
  },
  {
    name: 'Location 3',
    location: {
      latitude: 52.057043,
      longitude: 4.389277
    }
  }
]

//  Calculate my distance from all locations
const locationsWithDistance = filterLocationsOnDistance({ coords, locations, distance })
```

Result:
```javascript
[
  {
    name: 'Location 2',
    location: {
      latitude: 52.17306,
      longitude: 5.434552
    },
    distance: 11121.588884360723
  }
]
```

## Test the package.

```
npm test
```

This will run all the tests in the test folder with mocha.

If you only want to check the eslint rules, just run.

```
npm run lint
```

## node.js

To include @hckrnews/geolocation in Node, first install with npm.

```
npm install @hckrnews/geolocation
```

Use the package in your node files.

```javascript
import { Arr } from '@hckrnews/geolocation';
```


[downloads-image]: https://img.shields.io/npm/dm/@hckrnews/geolocation.svg
[npm-url]: https://www.npmjs.com/package/@hckrnews/geolocation
[npm-image]: https://img.shields.io/npm/v/@hckrnews/geolocation.svg
[npm-stats]: https://npm-stat.com/charts.html?package=@hckrnews/geolocation
[travis-url]: https://www.travis-ci.com/github/hckrnews/geolocation
[travis-image]: https://www.travis-ci.com/hckrnews/geolocation.svg?branch=main
[coveralls-url]: https://coveralls.io/r/hckrnews/geolocation
[coveralls-image]: https://img.shields.io/coveralls/hckrnews/geolocation/master.svg
[codecov-url]: https://app.codecov.io/gh/hckrnews/geolocation
[codecov-image]: https://img.shields.io/codecov/c/github/hckrnews/geolocation.svg
[scrutinizer-url]: https://scrutinizer-ci.com/g/hckrnews/geolocation/?branch=master
[scrutinizer-image]: https://scrutinizer-ci.com/g/hckrnews/geolocation/badges/quality-score.png?b=main
