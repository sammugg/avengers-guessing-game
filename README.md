# Avengers Guessing Game

A simple guessing game that has a user select a character and the computer randomly decide if they survive the new movie Avengers: Infinity War.
>Images are not my own and all creative credit goes to their creators.

This little project was used as part of an Intro to JavaScript session. The session covered functions, Unit Testing, and Test Driven Development. [Click here to see the slide deck.](https://slides.com/sammugg/js-functions-and-tdd)

## File Structure

```
├── index.html
├── assets/        # directory holding image assets
├── node_modules/  # directory holding installed assets
├─┬ src/           # directory for source code
│ ├── main.js      # primary JS module
│ └── helpers.js   # JS module containing helper functions
└─┬ test/
  └── unit/        # directory holding unit tests
```

## To Run Locally:

1. Clone this repository and navigate into project directory
2. Install browser-sync (`npm install -g browser-sync`)
3. run `npm run bsync`
4. Navigate to http://localhost:8080 in a browser

## To Run Tests

1. Install dependencies with `npm install`
2. From the root of the project, run `npm test`
