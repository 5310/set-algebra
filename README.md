# Set Algebra

A set algebra operations library for ES6 sets.

## API

### `union( a, b )`

Returns an union of the Set instances a and b.

### `intersection( a, b )`

Returns an intersection of the Set instances a and b.

### `complementation( a, b )`

Returns a complementation of the Set instances a and b. Of course, b is complemented from a.

### `u( a, b )`

Alias: `union( a, b )`

### `n( a, b )`

Alias: `intersection( a, b )`

### `c( a, b )`

Alias: `complementation( a, b )`

## Platform

The implementation is written in Javascript and uses Maps, Sets, and for-of statements that are part of the ECMAScript version 6 speicification still under development.

However, most modern browsers, and Node.js v0.11 with the `--harmony` flag, can run these just fine right now.

Transpiled ES5 versions have still been included for the UMD and CommonJS versions regardless. The CommonJS version, or rather, the NPM module, automatically loads the ES5 version if the ES6 one fails to. But the specific UMD version will have to be added to an HTML file manually.

UMD version exports the global namespace `setalg`.

## Roadmap

1. Properly document API and usage.
2. Add badges!
