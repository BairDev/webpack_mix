## Webpack: Mix AMD and ES6 Modules

We are especially interested in what happens to contructor function, because we are stumbled on issues in a really large project with them. Contructor functions are suddenly objects if you do the following:

    Module 1 (ES6) -> uses Module 2 (AMD) -> in which the class MyClass of Module 3 (ES6) is instantiated -> Error
        -> Uncaught TypeError: MyClass is not a constructor
        -> it is an object

## Usage

1. npm install
2. npm run start
3. load index.html in browser

## Current console output

Is is very unlikely: it works as expected! The current output in my browser console looks like this (Chrome 60, Linux):

    Inside module2, what type is the exported constructor of module3? object Object
    mix-bundle.js:89 Uncaught TypeError: Something is not a constructor
        at Object.<anonymous> (mix-bundle.js:89)
        at Object.defineProperty.value (mix-bundle.js:95)
        at __webpack_require__ (mix-bundle.js:20)
        at Object.<anonymous> (mix-bundle.js:72)
        at __webpack_require__ (mix-bundle.js:20)
        at Object.defineProperty.value (mix-bundle.js:63)
        at mix-bundle.js:66

## SO-Question

There is [this SO-Question](https://stackoverflow.com/questions/36388766/unexpected-uncaught-typeerror-xxx-is-not-a-constructor-errors-with-babel-and), which describes at least a similar problem. I will now try to find a solution based on its answer and similar resources, although it is related to the usage of Babel.