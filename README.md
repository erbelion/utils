# javascript utils

[![Experimental version](https://img.shields.io/badge/-experimental-red)](#) [![Get package from npm](https://img.shields.io/npm/v/@erbelion/utils?logo=npm&logoColor=white&style=flat&label=)](https://www.npmjs.com/package/@erbelion/utils) [![Downloads](https://img.shields.io/npm/dw/@erbelion/utils?color=blue&label=&logoColor=white&style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI+PC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTEyLjUgNFYxN00xMi41IDE3TDcgMTIuMjEwNU0xMi41IDE3TDE4IDEyLjIxMDUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPHBhdGggZD0iTTYgMjFIMTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4gPC9nPjwvc3ZnPg==)](https://www.npmjs.com/package/@erbelion/utils)

A collection of simple javascript utility functions for use in browser and node.js apps.

If you have any ideas what functions to add, feel free to open an [issue](https://github.com/erbelion/utils/issues).

Warning: This package is in experimental state, updates may be critical.

## Installation
**yarn**
```
yarn add @erbelion/utils
```
**npm**
```
npm i @erbelion/utils
```

## Functions

[Time](#Time)

[Numbers](#Numbers)

[URLs](#URLs)

## Time

### sleep(ms)
[source](https://stackoverflow.com/a/39914235/5827880)

```
import { sleep } from '@erbelion/utils'

await sleep(5000)
// 5 seconds have elapsed
```

## Numbers

### compactNumber(number)
[source](https://stackoverflow.com/a/74112691/5827880)

```
import { compactNumber } from '@erbelion/utils'

compactNumber(1555) // 1.6K
compactNumber(1555555) // 1.6M
compactNumber(1555555555) // 1.6B
compactNumber(1555555555555) // 1.6T
```
### random() || random(max) || random(min, max)

```
import { random } from '@erbelion/utils'

random() // 0 or 1
random(69) // random from 0 to 69
random(69, 420) // random from 69 to 420
```

## URLs

### isUrl(url) || isUrl(url, strict)
[source1](https://stackoverflow.com/a/43467144/5827880) [source2](https://stackoverflow.com/a/49849482/5827880)

```
import { isUrl } from '@erbelion/utils'

isUrl('https://github.com/erbelion/utils') // true
isUrl('bruh://man.com') // false
isUrl('broher') // false

isUrl('github.com/erbelion/utils') // true
isUrl('github.com/erbelion/utils', true) // false
```

### urlParams(url)
[source](https://stackoverflow.com/a/979995/5827880)

```
import { urlParams } from '@erbelion/utils'

urlParams('https://github.com/erbelion/utils?a=1&b=2') // { a: 1, b: 2 }
urlParams('') // {}

// if no arg is given, then browser url is taken (window.location.href)
urlParams() // {}
```

### updateUrlParams(newParams) || updateUrlParams(newParams, url) || updateUrlParams(newParams, oldParams)
check vue example [here](https://codesandbox.io/s/utils-example-ctxod4?file=/src/App.vue)
```
import { updateUrlParams } from '@erbelion/utils'

updateUrlParams({ a: 1 }, 'https://github.com/erbelion/utils?b=2') // { a: 1, b: 2 }
updateUrlParams({ a: 1 }, { b: 2 }) // { a: 1, b: 2 }

// if no second arg is given, then browser url (window.location.href) is updated without reload
updateUrlParams({ a: 1 }) // updates current window url to https://github.com/erbelion/utils?a=1

// remove url params
updateUrlParams({a: ''}, 'https://github.com/erbelion/utils?a=1') // {}
```