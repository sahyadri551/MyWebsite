/*
to create a local, private scope for variables, preventing them from polluting 
the global namespace and avoiding naming conflicts with other parts of your code.
When to use an IIFE:
To create private variables and functions
To organize code into modules
To avoid naming conflicts
For performance with global objects
Why to use an IIFE over a normal function:
To avoid polluting the global namespace
An IIFE encapsulates code and data within its local scope,
 hiding the implementation details from the outside world 
 and providing a cleaner interface
 IIFEs are excellent for creating self-contained modules of
  code that can be managed and maintained independently. 
Variable Privacy:An IIFE can create private variables and functions that are
  not accessible from the outside world.
Execution on Definition: An IIFE executes immediately upon definition,
  ensuring that the code inside is executed as soon as it's defined.
*/

(function smt() {
    let name1 = "Smt"
    console.log("Hello, " + name1 + "!")
})();

// smt() -> error

((name) => console.log(`Hello, ${name}!`))("Smt")