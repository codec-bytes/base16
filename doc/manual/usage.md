# Usage

The code needs a ES2015+ polyfill to work, for example
[regenerator-runtime/runtime](https://babeljs.io/docs/usage/polyfill).
```js
await import( 'regenerator-runtime/runtime.js' ) ;
// or
import 'regenerator-runtime/runtime.js' ;
```

Then
```js
const codecbase16 = await import( '@codec-bytes/base16' ) ;
// or
import * as codecbase16 from '@codec-bytes/base16' ;
```
