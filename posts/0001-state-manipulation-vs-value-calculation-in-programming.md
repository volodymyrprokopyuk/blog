# State manipulation vs value calculation in programming

## What is programming?

**Programming** at the most basic level is **the art of giving instructions to
the machine** to be executed. This definition is very basic but it clearly
defines the essence of programming. There is some instruction set that the
machine understands and is capable of execute. The programming consists in
assembling these instructions into correct sequence in order to achieve the
desired result.

The machine instruction set and the language constructs are limited and
finit. But the possibilities of programming are endless. The point is that there
are many different methods to combine the instructions and the language
constructs. The variety of programming methods results in different programming
paradigms. The main programming paradigms are procedural programming,
object-oriented programming and functional programming. The essential difference
between these paradigms is how the state manipulation and value calculation is
performed.

## State manipulation

Programming as the art of giving instructions to the machine can be centered
around **state manipulation**. The program starts with some initial state
predefined in the code or configured externally. Than the program **executes
statements** and changes the state of the entities modeled in the program. Each
statement defines the transition from one entity state to another. So the whole
program can be represented as a sequence of entity **state transitions**. At the
end of the program execution all entities are drawn to the desired final state.

The entity state is represented in the program as some objects in memory. In
order to change the entity state it is necessary to change this objects in
memory. This can be done by entity itself or by other entities in the
program. So the entity has **shared mutable state** that changes over time as
program executes. The operation of state mutation in programming is called
**assignment**. The assignment of a value to a variable updates the variable
memory with a new value. The assignment of a value to a variable is denoted as
follows: `variable = value`. The assignment means the at some point in the time
the variable memory will hold the assigned value. It is very important to state
that the same variable can hold different values during its lifetime, hence the
name variable. That is the value of variable is changing over time and there is
no guarantee that the variable will hold some particular value at some
particular point in time.

An example of state manipulation program:
```javascript
let arr = []; // initial state
for(let i = 0; i <= 5; ++i) {
  arr.push(i * 10); // state manipulation step
}
// arr => [0, 10, 20, 30, 40, 50]
```
The program is composed of statements that mutate variables `arr` and `i`. The
variables `arr` and `i` are modified in place and change over time until get to
the final result. So there is state transition sequence that lead to the final
result.

## Value calculation

Programming as the art of giving instructions to the machine can also be
centered around **value calculation**. The purpose of the program is to
calculate the final value from the initial one passing through intermediate
value calculations. The program starts with the initial value and **applies
expressions** in sequence to the initial and intermediate values in order to get
the final result. The output of the previous expression is the input for the
next expression and so on until the final result. So the whole program is a
sequence of **value transformations**. At the end of the program execution the
desired final value is calculated.

The program execution can be represented as a sequence of initial, intermediate
and final values. Each value is allocated in different memory location. Once
assigned the value does not change in time because there is no update operation,
only new value creation operation. So the program has **immutable values** that
do not change over time. To differentiate the operation of one-time assignment
without update from regular assignment with update the term **binding** is
used. When binding a value to a variable the variable is called binding and not
variable any more. The operation of binding binds a binding to a value and from
now on the value of the binding cannot be changed. The notation of a binding is
the same as the notation of assignment: `binding = value`. The point here is
that the value of binding is guaranteed to be the same during the program
execution which is not true for an assignment. Immutable values make it easier
to reason about program and to write more reliable code.

An example of value calculation program equivalent of the above discussed
program:
```elixir
l = 0..5 |> Enum.map(&(&1 * 10))
# l => [0, 10, 20, 30, 40, 50]
```
The program is composed of expressions. The output of the previous expression is
the input to the next expression. So there is value transformation sequence that
lead to the final result. There is no state manipulation. The binding `l` is
bound to the final result of the composed expression and never changes in time.

## Conclusion

Programming is the art of giving instructions to the machine.

Programming can be centered around state manipulation. In this case the program
consist of a sequence of statements and assignments over shared mutable state
that defines state transitions that leads to the final result.

Alternatively programming can be centered around value calculation. In this case
the program is a composition of expressions and bindings over immutable values
that defines value transformations that leads to the final result. The value
calculation approach leads to more reliable code and is used in functional
programming.
