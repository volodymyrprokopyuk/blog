# Statements vs expressions in programming

Object-oriented programming (OOP) uses statements as building blocks for program
construction. Functional programming (FP) uses expressions for program
composition. Statements imply state mutation, side effects and are not
composable. Expressions are stateless, referentially transparent and
composable. The comparison of statements vs expression implications is presented
below.

## Statements

Object-oriented programming is centered around class definition, object
instantiation, state mutation and method invocation operations. All these
operations are expressed in object-oriented languages using statements. A
**statement** is a description of an operation that usually implies **state
mutation** and does not return any value. Object-oriented program consists of a
**sequence of statements** that are executed in order. Statements mutate program
state during program execution. The sequence of state mutating statements lead
to the final result of a program.

The effect of statement execution is state mutation. Statement does not return
any value but depends on program environment and mutates program state. In the
following examples the state mutation nature of statements is demonstrated.

**Assignment statement** updates a variable with a new value and may return the
assigned value:
```javascript
let count = 0;
// count => 0
```
When assignment statement is executed the variable `count` is updated with a new
value. Assignment statement can be executed many times with the same variable
and each time the variable will be updated with a new value. The **variable is
mutable**. This proves the state mutation nature of assignment statement.

**Conditional statement** executes one set of statements or another set of
statements based on some condition from the program environment:
```javascript
let count = 0;
let message = '';
if (count === 0) {
  message = 'No items';
} else {
  message = `${count} items`;
}
// message => No items
```
Conditional statement checks the value of `count` variable from the program
environment and executes the assignment statement with corresponding message.
The assignment statement mutates program state by updating `message` variable in
place. There is no return value from a conditional statement only program state
mutation.

**Looping statement** executes repeatedly a set of statements mutating the
looping variable and the program state:
```javascript
let arr = [];
for (let count = 0; count <= 5; ++count) {
  arr.push(count * 10);
}
// arr => 0 10 20 30 40 50
```
Looping statement mutates the state of variable `count` and executes `arr`
mutation statement multiple times. There is no return value from looping
statement only program state mutation.

The essence of statement execution is program state mutation. Statement
execution produces side effects. A **side effect** is program state mutation as
a consequence of statement execution. So execution of a statement changes the
program environment. The result of **statement execution depends on program
environment**. The same statement can produce different side effects depending
on the environment it is executed in.

For the looping statement example the program environment is `count` and `arr`
variables. If the `count` variable is only modified with the increment statement
the looping statement side effect is:
```javascript
let arr = [];
for (let count = 0; count <= 5; ++count) {
  arr.push(count * 10);
}
// arr => 0 10 20 30 40 50
```
If the `count` variable is also modified with assignment statement within the
body of looping statement the side effect of the same looping statement is
different:
```javascript
let arr = [];
for (let count = 0; count <= 5; ++count) {
  arr.push(count * 10);
  count = 6; // side effect changes program environment
}
// arr => 0
```

Statements are oriented to produce side effects. Statements do not return
values. Statements side effects depends on program environment. The above
mentioned implies that **statements are not composable**. Given that statements
produce side effects and depends on program environment the only way to compose
statements is using program environment. The composition of statements via
program environment is very unreliable and very difficult to reason about
because the environment is changing with the execution of each statement.

## Expressions

Functional programming is centered around function definition, function
composition, function application and value calculation operations. All these
operations in functional languages are performed using expressions. An
**expression** is a description of an operation that returns a value does not
depends on program environment and does not produce any side effects. The
expression result value depends only on the expression parameters and does not
depend on any program state. The only result of an **expression evaluation** is
the value that expression evaluates to. The expression evaluation does not
mutates program state. A functional program consists of **expression
compositions** that are evaluated to calculate the final program result.

The expression evaluation does not produce side effects and does not depends on
program environment. The expression evaluation only depends on expression
parameters. The **expression evaluation is stateless**. In the following
examples the stateless nature of expressions is demonstrated.

**Binding expression** binds a value to a binding and returns a bound value:
```elixir
count = 0
# count => 0
```
The only result of binding expression is the binding of a value to the binding
`count`. The value of the whole binding expression is the bound value. The
program environment remains unchanged. The binding expression for the `count`
binding can be executed only once for a function application. The **binding is
immutable**. There is no program state mutation nor dependence on program
environment.

**Conditional expression** evaluates one composed expression or another composed
expression based on some condition and returns the evaluated expression value:
```elixir
count = 0
message = if count == 0 do 'No items' else '#{count} items' end
# message => 'No items'
```
The conditional expression evaluates to a value of an expression based on the
`count` value. The conditional expression evaluation does not depend on program
environment nor modifies program environment.

**Looping expression** in functional languages can be represented as a `map`
function application. The `map` function applies a function to a list and
produces a new list without changing the initial list:
```elixir
l = 0..5 |> Enum.map(&(&1 * 10))
# l => [0, 10, 20, 30, 40, 50]
```
The only result of looping expression is the new list with elements that are the
result of application of a function passed to `map`. The initial list and
program environment remain unchanged.

The benefit of the fact that expressions do not have side effects is that
expressions are referentially transparent. **Referential transparency** of an
expression means that any expression can be replaced with the result it
evaluates to for a given expression parameters without changing the overall
program result. The stateless nature of expressions means that it is more easy
to reason about expression composition.

Each expression returns a value. The expression returned value can be used as
input for another expression. **Expressions are composable**. The expression
composition allows to construct more complex functions from simpler functions.
The fact the expression does not have side effects and are referentially
transparent makes it possible to construct more reliable code and build complex
functionality from simpler well defined blocks.

## Conclusion

Object-oriented languages mainly use statements as building block for a program
construction. Statement execution has side effects. Statements depend on program
environment and mutate program state. The program in object-oriented languages
is a sequence of assignment, conditional and looping statements that modify
program state. Statements do not return values and are not composable.

Functional languages use expressions as building blocks of a program
construction. Expression evaluation has no side effects and is referentially
transparent. Expression evaluation does not depends on program environment nor
modifies program state. The program in functional languages is a composition of
binding, conditional and looping expressions that evaluates to the final program
result. Expressions are composable and easy to reason about.
