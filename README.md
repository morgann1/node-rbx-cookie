# node-rbx-cookie

This package is a Node.js addon built with the napi-rs framework, utilizing the Rust crate 'rbx_cookie' under the hood.

## Installation

You can install this package using npm:

```bash
$ npm install node-rbx-cookie
```

## Usage

Here is a basic example of how to use the package:

```javascript
const { get, getValue } = require('node-rbx-cookie');

// Returns the cookie as a formatted header ready to add to a request
const cookieHeader = get();
console.log(cookieHeader);

// Returns the raw cookie value
const rawCookie = getValue();
console.log(rawCookie);
```

## Features

* Get cookie as a formatted header
* Get raw cookie value

## Credits 💖

### rbx_cookie

This package also relies on the 'rbx_cookie' Rust crate for some of our functionality. This crate was created by [blake-mealey](https://github.com/blake-mealey) for [mantle](https://github.com/blake-mealey/mantle).

### napi-rs

This package was made possible thanks to the [napi-rs](https://github.com/napi-rs/napi-rs) framework. Big thanks to the napi-rs team for their amazing work.