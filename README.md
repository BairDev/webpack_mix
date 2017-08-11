## Webpack: Mix AMD and ES6 Modules

We are especially interested in what happens to contructor function, because we are stumbled on issues in a really large project with them. Contructor functions are suddenly objects if you do the following:

    Module 1 (ES6) -> uses Module 2 (AMD) -> in which the class MyClass of Module 3 (ES6) is instantiated -> Error
        -> Uncaught TypeError: MyClass is not a constructor
        -> it is an object

## Usage

1. npm install
2. npm run X
3. load index.html in browser