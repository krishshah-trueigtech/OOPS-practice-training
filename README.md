JavaScript Task – OOP & Generator Functions

Objective: This task helps you revise Object-Oriented Programming (OOP) and Generator


Functions in JavaScript using simple, easy-to-understand examples. Focus on JavaScript logic
rather than UI. HTML should be minimal and used only for testing.

Part 1: Object-Oriented Programming (OOP)

- Create a class called User with properties: name, email, and role.
- Add methods such as login() and logout() inside the User class.
-  Create two child classes: Admin and Member that extend the User class.
-  Admin class should have an additional method: createTask().
-  Member class should have an additional method: completeTask().
-  Use constructor(), super(), and method overriding wherever required.
-  Create multiple objects from these classes and log their behavior in the console.

Concepts Covered: classes, objects, constructors, inheritance, encapsulation, polymorphism, and
the 'this' keyword.

Part 2: Generator Functions
-  Create a generator function that generates unique task IDs.
-  Every time next() is called, the generator should return a new ID.
-  Create another generator that simulates task progress like: 0%, 25%, 50%, 75%, 100%.
-  Use the yield keyword to pause and resume execution.
-  Consume generator values using next() and also using a for...of loop.

Concepts Covered: generator functions, yield, iterator protocol, lazy execution.
Part 3: Using Generators Inside Classes
-  Use the task ID generator inside the Admin class while creating tasks.
-  Use the progress generator to simulate task completion.
-  Log each step clearly in the console to understand the execution flow.
Constraints
-  Use only Vanilla JavaScript (ES6+)
-  No frameworks or external libraries
-  Minimal HTML and no CSS focus
-  Code must be clean, readable, and commented
Evaluation Criteria
-  Correct implementation of OOP concepts
-  Proper use of generator functions
-  Readable and maintainable code
-  Ability to explain the solution clearly