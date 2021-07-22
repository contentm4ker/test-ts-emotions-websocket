# Test Task TypeScript Emotions Websocket

## Running the build
To call a script, simply run `npm run <script-name>` from the command line.
Below is a list of all the scripts this template has available:

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
| dotenv                          | Loads environment variables from .env file.                           |
| errorhandler                    | Express 4 middleware.                                                 |
| express                         | Node.js web framework.                                                |
| lodash                          | General utility library.                                              |
| lusca                           | CSRF middleware.                                                      |
| winston                         | Logging library                                                       |

### `devDependencies`

| Package                         | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| @types                          | Dependencies in this folder are `.d.ts` files used to provide types    |
| nodemon                         | Utility that automatically restarts node process when it crashes       |
| ts-node                         | Enables directly running TS files.                                     |
| eslint                          | Linter for JavaScript and TypeScript files                             |
| typescript                      | JavaScript compiler/type checker that boosts JavaScript productivity   |

To install or update these dependencies you can use `npm install` or `npm update`.

## Environment

Environment vars are managed through `.env` if exists (`.env.example` instead).

| Var                             | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| PORT                            | Application Port - express server listens on this port (default 3000).|

## License
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the [MIT](LICENSE) License.
