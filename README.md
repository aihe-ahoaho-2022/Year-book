# Lettuce Meat

## What is Lettuce Meat?
A food comparison application. We'll show you different foods to help you decide what you're hungry for.

## Where to look for the planning?
[Check out the Miro board!](https://miro.com/app/board/uXjVOlYW2wk=/)

## After cloning what should I do?
```
git checkout -b <branchname>
npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```
Then have a look over the code to get a feel for it.

## Before Creating a Pull Request
Make sure there are no linting or testing errors.
```
npm run lint
npm run test
```

Additionally, to check you have written tests with good coverage.
```
npm run test:coverage
```
