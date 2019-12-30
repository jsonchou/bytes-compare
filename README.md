# bytes-compare

[![NPM version](https://img.shields.io/npm/v/bytes-compare.svg?style=flat)](https://www.npmjs.com/package/bytes-compare)
[![Build Status](https://travis-ci.org/jsonchou/bytes-compare.svg?branch=master)](https://travis-ci.org/jsonchou/bytes-compare)
[![codecov](https://codecov.io/gh/jsonchou/bytes-compare/branch/master/graph/badge.svg)](https://codecov.io/gh/jsonchou/bytes-compare)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE8+ Edge+                                                                                                                                                                                                      | last 10 versions                                                                                                                                                                                                  | last 10 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## Install

~~~ base
npm i bytes-compare -S
~~~

## build with rollup

~~~ base
npm run build
~~~

## use

~~~ javascript
const bytesCompare = require('bytes-compare')
or
import bytesCompare, { parse, format, compare } from 'bytes-compare'
~~~

### format
[view](https://github.com/visionmedia/bytes.js#bytesformatnumber-value-options-stringnull)

### parse
[view]([view](https://github.com/visionmedia/bytes.js#bytesformatnumber-value-options-stringnull))

### compare
```
compare(1024, ">=1024KB")
=> true


compare(1024 * 1024, ">=1024MB")
=> true


compare(1024 * 1024 * 1024, ">=1024GB")
=> true
```

## [Docs](https://github.com/jsonchou/bytes-compare/tree/master/docs)

## [Test Case](https://github.com/jsonchou/bytes-compare/blob/master/__tests__/index.spec.ts)


