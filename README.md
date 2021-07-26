# Test Task TypeScript Emotions Websocket

## Requirements
For scaling to multiple [Socket.IO](https://socket.io/) servers you need to install and run the `redis-server`.

## Running the build
To call a script, simply run `npm run <script-name>` from the command line.

To run the app:
```
npm run build
npm start
```

Below is a list of all the scripts this app has available:

| Npm Script | Description  |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `build-ts`                | Compiles all source `.ts` files to `.js` files in the `dist` folder                               |
| `build`                   | Full build. Runs ALL build tasks (`build-ts`, `lint`)         |
| `debug`                   | Performs a full build and then serves the app in watch mode                                       |
| `lint`                    | Runs ESLint on project files                                                                      |
| `serve-debug`             | Runs the app with the --inspect flag                                                              |
| `serve`                   | Runs node on `dist/server.js` which is the apps entry point                                       |
| `start`                   | Does the same as 'npm run serve'. Can be invoked with `npm start`                                 |
| `watch-debug`             | The same as `watch` but includes the --inspect flag so you can attach a debugger                  |
| `watch-node`              | Runs node with nodemon so the process restarts if it crashes. Used in the main watch task         |
| `watch-ts`                | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed               |
| `watch`                   | Runs all watch tasks (TypeScript, Node). Use this if you're not touching static assets.     |

## Dependencies
Dependencies are managed through `package.json`.

### `dependencies`

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| @socket.io/redis-adapter        | For broadcast events between several Socket.IO servers.               |
| dotenv                          | Loads environment variables from .env file.                           |
| errorhandler                    | Express 4 middleware.                                                 |
| express                         | Node.js web framework.                                                |
| lodash                          | General utility library.                                              |
| lusca                           | CSRF middleware.                                                      |
| redis                           | A high performance Redis client.                                      |
| socket.io                       | node.js realtime framework server.                                    |
| winston                         | Logging library                                                       |

### `devDependencies`

| Package                         | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| @types                          | Dependencies in this folder are `.d.ts` files used to provide types    |
| nodemon                         | Utility that automatically restarts node process when it crashes       |
| ts-node                         | Enables directly running TS files.                                     |
| eslint                          | Linter for JavaScript and TypeScript files                             |
| typescript                      | JavaScript compiler/type checker that boosts JavaScript productivity   |

## Environment

Environment vars are managed through `.env` if exists (`.env.example` instead).

| Var                             | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| PORT                            | Application Port - express server listens on this port (default 3000).|
| REDIS_ADAPTER_ENABLE            | Redis adapter activation.                                             |
| REDIS_ADAPTER_HOST              | Redis-server host.                                                    |
| REDIS_ADAPTER_PORT              | Redis-server port.                                                    |
| EMOTION_ID_LOWER                | Allowed emotions ids from >= 1.                                       |
| EMOTION_ID_UPPER                | Allowed emotions ids from <= 8.                                       |

## Load testing
Load testing performed with [artillery.io](https://artillery.io/).

The test is located in the `load-test.yml` file.

The command to run the test (linux):
```
MULTICORE=1 ARTILLERY_WORKERS=4 artillery run load-test.yml
```
Testing report (i3-6100H CPU @ 2.70GHz, 16 RAM, w/ redis adapter):
```
Scenarios launched:  4500
Scenarios completed: 4143
Requests completed:  8286
Mean response/sec: 22.55
Response time (msec):
  min: 0
  max: 25.4
  median: 0.2
  p95: 0.5
  p99: 2.2
Scenario counts:
  Send emotion, wait, disconnect: 4500 (100%)
Codes:
  0: 8286
Errors:
  Error: websocket error: 357
```

## License
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the [MIT](LICENSE) License.
