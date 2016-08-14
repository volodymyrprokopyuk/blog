# State manipulation vs value calculation in programming

The main idea of object-oriented programming (OOP) is state manipulation.
Alternatively the main idea of functional programming (FP) is value calculation.
The difference between these programming paradigms from the point of view of
state mutation and value calculation is explained below. The operation of
assignment and state mutation from OOP is compared to the operation of binding
and value calculation from FP.

## What is programming?

**Programming** at the most basic level is **the art of giving instructions to a
machine** to be executed. This definition is very basic but it clearly defines
the essence of programming. There is an instruction set that the machine
understands and is capable of execute. Programming consists in assembling these
instructions into correct sequence in order to achieve the desired result.

The machine instruction set and the language constructs are limited and finit.
But the possibilities of programming are endless. The point is that there are
many different methods to combine the machine instructions and the language
constructs. The diversity of programming methods results in the variety of
programming paradigms. The main programming paradigms are object-oriented
programming and functional programming. The essential difference between these
programming paradigms is how state manipulation and value calculation is
performed.

## State manipulation

Programming as the art of giving instructions to a machine can be centered
around **state manipulation**. **Object-oriented programming** broadly applies
state manipulation techniques. A program starts with an initial state predefined
in the code or configured externally. Than the program **executes statements**
and changes the state of entities modeled in the program. Each statement defines
a transition from one entity state to another. So the whole program can be
represented as a sequence of entity **state transitions**. At the end of the
program execution all entities are drawn to the desired final state.

The entity state is represented in a program as objects in memory. In order to
change the entity state it is necessary to change these objects in memory. This
change can be done by the entity itself or by other entities in the program. So
the entity has **shared mutable state** that changes over time as program
executes. The operation of state mutation in programming is called
**assignment**. Assignment of a value to a variable updates the variable memory
with a new value. Assignment of a value to a variable is denoted as follows:
`variable = value`. Assignment means that at some point in time during the
program execution the variable memory will hold the assigned value. It is very
important to state that the same variable can hold different values during its
lifetime, hence the name variable. That is the value of a variable is changing
over time and there is no guarantee that the variable will hold some particular
value at some particular point in time as other assignment operations can change
the value of the variable.

An example of state manipulation program:
```javascript
let arr = []; // initial state
for(let i = 0; i <= 5; ++i) {
  arr.push(i * 10); // state manipulation operation
}
// arr => [0, 10, 20, 30, 40, 50]
```
The program is composed of statements that mutate variables `arr` and `i`. The
variables `arr` and `i` are **modified in place** and change over time until get
to the final result. So there is in the program state transition sequence that
lead to the final result.

## Value calculation

Programming as the art of giving instructions to a machine can also be centered
around **value calculation**. **Functional programming** broadly applies value
calculation techniques.  The purpose of a program is to calculate the final
value from the initial one passing through intermediate value calculations. A
program starts with an initial value and **applies expressions** in sequence
to the initial and intermediate values in order to get the final result. The
output of the previous expression is the input for the next expression and so on
until the final result. So the whole program is a sequence of **value
transformations**. At the end of the program execution the desired final value
is calculated.

The program execution can be represented as a sequence of initial, intermediate
and final values. Each value is allocated in different memory location. Once
assigned the value does not change in time because there is no update operation,
only new value creation operation. So the program has **immutable values** that
do not change over time. To differentiate the operation of one-time assignment
without an update from regular assignment with an update the term **binding** is
used. When binding a value to a variable the variable is called binding and not
variable any more. The operation of binding binds a binding to a value and from
now on the value of the binding cannot be changed. The notation of a binding is
the same as the notation of an assignment: `binding = value`. The point here is
that a value of binding is guaranteed to be the same during a program execution
which is not true for an assignment. Immutable values make it easier to reason
about a program and to write reliable code.

An example of value calculation program equivalent to the above discussed
program:
```elixir
l = 0..5 |> Enum.map(&(&1 * 10))
# l => [0, 10, 20, 30, 40, 50]
```
The program is composed of expressions. The output of the previous expression is
the input to the next expression. So there is a value transformation sequence
that lead to the final result. There is no state manipulation. The binding `l`
is bound to the final result of the composed expression and **never changes in
time**.

## Conclusion

Programming is the art of giving instructions to a machine. Programming can be
centered around state manipulation. In this case a program consist of a sequence
of statements and assignments over shared mutable state that defines state
transitions that lead to the final result.  Alternatively programming can be
centered around value calculation. In this case a program is a composition of
expressions and bindings over immutable values that defines value
transformations that lead to the final result. The value calculation approach is
easy to reason about, leads to reliable code and is used in functional
programming.
