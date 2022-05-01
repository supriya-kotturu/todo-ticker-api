# todo-ticker-api

API to perform CRUD operations on a todo list with a timer using Nest.js

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Todo

- [x] Nest.js setup
- [ ] API end points
  - [ ] tasks
    - [x] /tasks GET
    - [x] /tasks POST
    - [x] /tasks/:id GET
    - [ ] /tasks/:id UPDATE
    - [ ] /tasks/:id DELETE
  - [ ] todos
    - [ ] /tasks/list GET
    - [ ] /tasks/list POST
    - [ ] /tasks/list/:id GET
    - [ ] /tasks/list/:id UPDATE
    - [ ] /tasks/list/:id DELETE
- [ ] Add Authentication [Auth0]
- [ ] Add database [Mongodb]
- [ ] Add database [graphql]
