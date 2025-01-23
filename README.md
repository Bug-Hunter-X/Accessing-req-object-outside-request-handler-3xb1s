# Express.js Bug: Accessing Request Object Outside Request Handler

This repository demonstrates a common error in Express.js applications: attempting to access the `req` (request) object outside of its intended scope, specifically outside a request handling function (e.g., `app.get`, `app.post`, etc.).

## Problem

The `req` object is specific to each incoming request.  It contains information about the client's request, such as the HTTP method, headers, and body.  Trying to access `req` from a function or block of code that isn't directly handling a request will result in a `ReferenceError` because `req` will be undefined in that context.

## Solution

The solution involves restructuring your code to properly handle the request within the appropriate request handler functions. Pass necessary data from the `req` object into any other functions that need it, instead of attempting to access `req` directly.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `node bug.js`. You will encounter an error.
4. Run `node bugSolution.js`. The corrected code will demonstrate the proper usage of the `req` object.
