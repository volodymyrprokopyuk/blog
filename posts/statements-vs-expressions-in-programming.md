# Statements vs expressions in programming

## Statements

Object-oriented programming (OOP) is centered around class definition, object
instantiation, state mutation and method invocation operations. All these
operations are expressed in OO languages using statements. A **statement** is an
operation description that usually implies **state mutation**. OO program
consists of a **sequence of statements** that are executed in order. Program
statemens mutate program state and draw program execution to the desired program
state that represents the final result of the program.

The effect of statement execution is state mutation. Statement does not return
any value but mutates program state. In the following examples the state
mutation nature of statements is presented.

**Assignment statement** assigns a value to a variable:
```javascript
var count = 0;
```
When assignment statement is executed the variable `count` is updated with a new
values. Assignment statement can be executed many times with the same variable
and each time the variable will be updated whth a new value. This proves the
state mutation nature of assignment statement.

**Conditional statement** executes a set of statements or another set of
statements depending on some condition:
```javascript
var count = 0;
if (count === 0) {
  console.log('No items');
} else {
  console.log(`${count} items`);
}
// => No items
```
Conditional statement checks the value of `count` variable and executes
`console.log()` statement with corresponding message. The `console.log()`
statement mutates program state by printing the message on the console. There is
no return value from conditional statement only program state mutation.

**Looping statement** executes repeatedly a set of statements mutating the
looping variable state:
```javascript
for (let count = 0; count <= 5; ++count) {
  console.log(count);
}
// => 0 1 2 3 4 5
```
Looping statement mutates the statet of a variable `count` and executes
`console.log()` statement multiple times. There is no return value from looping
statement only program state mutation.

The essence of statement execution is program state mutation. Statement
execution produces side effects. **Side effect** is program state mutation as a
consequence of estatement execution. So the execution of a statement changes the
program environment. **Statement execution depends on program environment**. The
same statement can produce different side effects depending on the environment
it is executed in.

For the looping statement example the program environment is the `count`
variable. If the `count` variable is only modified with the increment statement
the looping statement side effect is:
```javascript
for (let count = 0; count <= 5; ++count) {
  console.log(count);
}
// => 0 1 2 3 4 5
```
If the `count` variable is also modified with assignment statement within the
body of looping statement the side effect of the same looptin statement is
different:
```javascript
for (let count = 0; count <= 5; ++count) {
  console.log(count);
  count = 6; // side effect changes program environment
}
// => 0
```

Statements are oriented to produce side effects. Statements do not return
values. Statements side effects dependes on program environment. The above
mentioned implies that **statments are not composable**. Given that statements
produce side effects and depends on program environment the only way to compose
statements is using program environment. The composition of statements via
program environment is very unreliable and very dificult to reason about because
the environment is changing with the execution of each statement.

- OOP
- State change
- Side effects
- Environment dependent
- Not composable

## Expressions

Functional programming (FP) is centered around function definition, function
composition, function aplication and value calculation operations. All these
operations in a functional language are performed using expressions.
**Expression** is a programming language construct that returns a value. The
expression result value depends only on the expression parameters and does not
depend on any program state. The only result of an **expression evaluation** is
the value that expression evaluates to. The expression evaluation does not
mutates program state. The functional program consists of **expression
compositions** that are evaluated to calculate the final program result.

The expression evaluation does not produce side effects and does not dependes on
program environment. The expression evaluation only depends on expression
parameters. In the following examples the stateless nature of expression is
presented.

**Binding expression** binds a value to a binding and returns a bound value:
```elixir
count = 0
# => 0
```
The only result of binding expression is the binding of a value to the binding
`count`. The value of the whole binding expression is the boudn value. Program
environment remains unchanged. The binding expression for the `count` binding
can be executed only once for function aplication. The binding is
immutable. There is no state mutation.

**Conditional expression** evaluates one composed expression or another composed
expression based on some condition:
```elixir
count = 0
if count == 0 do 'No items' else '#{count} items' end
# => 'No items'
```
The conditional expression evaluates to a value base on the `count` value. The
conditional expression evaluation does not depend on program environment nor
modifies program environment.

**Looping expression** in fanctional language can be represented as `map`
function aplication. `map` function aplies a function to a list and produces new
list without changing the initial list:
```elixir
0..5 |> Enum.map(&(&1 * 10))
# => [0, 10, 20, 30, 40, 50]
```

- FP
- Stateless
- No side effects, referential transparency
- Environment independent
- Composable

## Conclusion
