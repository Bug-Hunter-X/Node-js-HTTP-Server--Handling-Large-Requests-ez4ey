# Node.js HTTP Server: Handling Large Requests

This repository demonstrates a common issue with Node.js HTTP servers: the inability to handle requests exceeding the default buffer size.  The `server.js` file shows the problematic code, while `server-solution.js` provides a solution.

## Problem

The default Node.js HTTP server has a limited buffer size for incoming requests.  If a request exceeds this size, the server will likely fail to process it correctly, potentially leading to unexpected behavior or errors.  This is particularly relevant when handling large file uploads or other substantial requests.

## Solution

The solution involves setting the `maxHeadersSize` option in the `http.createServer` method. This increases the buffer size, allowing the server to handle larger requests.  Refer to `server-solution.js` for the corrected code.

## How to run

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node server.js` (for the buggy version) or `node server-solution.js` (for the fixed version).
4. Test with a large request (e.g., using a tool like `curl` with a large file).