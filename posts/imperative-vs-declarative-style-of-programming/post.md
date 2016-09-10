# Imperative vs declarative style of programming

Imperative style of programming is concerned about how to calculate the final
result. Declarative style of programming is concerned about what the final
result is. Imperative style of programming is more flexible and more error
prone. Declarative style of programming is less flexible and more reliable. The
comparison between imperative and declarative style of programming is given
below.

## Imperative style of programming

Imperative style of programming is a basic method of programming. The
programming began with imperative style using the assembler programming
language. Imperative style of programming is older than declarative style of
programming. Imperative style of programming implies the **detailed step by step
instructions** to the machine about how to carry out the calculations to get the
final result.

The instructions used in imperative style of programming are **low-level
instructions**. The imperative style instruction set is very close to the
machine instruction set. The imperative style instruction set comprises
assignment, conditional and looping instructions that are common in all
programming languages. Imperative style of programming requires **explicit
definition of high-level abstractions** in program construction. All program
building blocks have to be explicitly defined using low-level imperative
instructions.

Imperative style of programming approaches the problem solution from the
perspective of **do yourself heavy work**. Imperative style of programming
provides only basic low-level instructions and gives total freedom and
flexibility about what and how high-level program abstractions can be
constructed. To construct high-level abstractions it is necessary to define how
exactly each and every abstraction have to be implemented. Imperative style of
programming operates in low-level terms of **how**. Low-level instruction set
provided by imperative style of programming allows for **greater flexibility and
freedom** compared with declarative style of programming. The cost of this
flexibility and freedom are larger, more verbose and more error prone
code. Imperative style of programming is used in **general purpose programming
languages**.

An example of imperative style of programming is a for loop:
```javascript
let arr = [];
for (let count = 0; count <= 5; ++count) {
  arr.push(count * 10);
}
// arr => 0 10 20 30 40 50
```
In order to get the final result it is necessary to control how the `count`
variable is initialized, how the `count` variable is modified and what is the
loop exit condition. The imperative programming approach is more verbose and
more error prone.

An example of declarative style of programming equivalent to the imperative for
loop:
```elixir
l = 0..5 |> Enum.map(&(&1 * 10))
# l => [0, 10, 20, 30, 40, 50]
```
The final result is desired in terms of high-level operations (range and
map). Declarative style of programming produces more reliable, less error prone
code that is easier to read, understand and reason about.

## Declarative style of programming

Declarative style of programming is a high-level method of programming.
Declarative style of programming is the evolution of imperative style of
programming. Declarative style of programming is younger than imperative style
of programming. The evolution of declarative style of programing means leaving
low-level programming concerns to the runtime and going towards **high-level
problem concerns**. Declarative style of programming is all about **defining
conditions that final result should satisfy**. Declarative style of programming
leaves all implementation details to the the runtime to deal with.

Declarative style of programming provides high-level abstractions to construct
program with. Declarative programming consists in **implicit use of high-level
abstractions** provided by the runtime. The high-level abstractions allow define
the conditions that the final result should satisfy. The declarative style
program is a composition of high-level abstractions that describe **what** the
final result is but not how to calculate the final result. Given the declarative
style program the runtime is capable of constructing and executing the necessary
operations to calculate the final result. The final result derivation from the
declarative result description is an automatic process done by the runtime. No
explicit detailed step by step instructions are needed. Define final result
conditions in terms of high-level abstractions and **let the runtime to solve
the problem**.

The high-level abstractions provided by declarative programming are **less
flexible and more reliable** than low-level instructions provided by imperative
programming. By providing high-level abstractions declarative programming limits
the capabilities and the flexibility of a program compared to an imperative
program constructed with low-level instructions. Declarative programming
provides more reliable and dedicated environment designed to **solve a specific
types of problems** easily and efficiently. The declarative programming
languages designed to solve a specific types of problems are called **DSL**s
(Domain Specific Languages). DSLs are an example of declarative style of
programming.

**Regular expressions** is a DSL for efficient string manipulation (searching,
extraction and replacing):
```javascript
const phonePage =
  `Volodymyr 123456789
   Svitlana 987654321`;
const phoneBook = [];
const r = /(\w+)\s+(\d+)/g; // regular expression
let m = null;
while((m = r.exec(phonePage)) !== null) {
  phoneBook.push({name: m[1], phone: m[2]});
}
// phoneBook =>
//   [{name: 'Volodymyr', phone: '123456789'},
//    {name: 'Svitlana', phone: '987654321'}]
```
The regular expression `/(\w+)\s+(\d+)/g` describes using high-level
abstractions (words, spaces and digits) what the result should be and not how to
calculate the result. Given the high-level abstract description of the desired
result the regular expressions engine performs necessary operation to parse and
extract the information. No explicit low-level instructions are involved in the
process only implicit high-level abstractions.

**SQL** is a DSL for efficient relational data manipulation (inserting,
updating, retrieving and deleting):
```sql
select o.order_id, p.product_id, p.name, p.price, o.quantity
from Orders o
  join Products p on p.product_id = o.product_id
where o.order_id = 1234;
```
SQL query describes in terms of high-level abstractions (relations,
intersections, projections and predicates) what conditions the retrieved
information should satisfy. All the necessary implementation details about how
to retrieve the desired information are handled by the SQL engine.

**HTML** is a DSL for efficient information structuring and presentation in
Internet (headers, paragraphs, lists, quotes, links):
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Volodymyr Prokopyuk's Blog</title>
  </head>
  <body>
    <h1>Post title</h1>
    <p>Post content</p>
  </body>
</html>
```
The HTML markup defines in terms of high-level operations (title, headers and
paragraphs) what the final page is. The browser rendering engine performs all
the necessary operations to display the page as described by HTML.

## Conclusion

Imperative style of programming implies detailed step by step low-level
instructions about how to calculate the final result. In order to construct a
program the high-level abstractions have to be defined explicitly. Imperative
style approach is do yourself heavy work. Imperative style of programming
operates in terms of how, not what. Imperative style of programming allows for
greater flexibility, is more verbose and error prone. Imperative style of
programming is used in general purpose programming languages.

Declarative style of programming provides high-level abstractions to construct a
program with. Declarative style of programming allows to concentrate on
high-level problem concerns by defining the conditions that the final result
should satisfy. Declarative style of programming operates in terms of what, not
how. Define the conditions that the final result should satisfy and let the
runtime to solve the problem. Declarative style is less flexible and more
reliable. Declarative style of programming is used in DSLs (Regular expressions,
SQL, HTML).
