they are structurally typed. (duck typing) in typescript object with the same fields are equivalent.

nominal type systems (c++, java, c#) types by name.

typescript can figure out the types by inference, based on the right hand side of the =.  You can explicitly label the type as well.  Statically typed.  Regular js is dynamically typed.  Typescript just forces you to be explicit.  Be really aware of what the EVENTS are when using typescript with react.

Functions use typing to name what type of parameters are expected, as well as what type is to be returned.  Many times the return value can be inferred.

You can create custom types in typecsript.  
- interface
- type

optional properties in a custom type are defined with a ?
type Dog = {
  name: string,
  age: number,
  weight?: string
}

casting

you can write generic functions.  classes in react use multiple generics.

void in typescript is used when the function doesn't return a value.


functional programming uses interfaces and types, and seeks to avoid changing state and avoid mutable data.  Eliminates side effects in code.  Statements can be excecuted in any order


object-oriented programming uses objects and classes.  They seek to represent real-world objects and holds onto the data (or attributes) an objet would have, as well as things that it can do (functions) which play with the data the object stores.  This means the data is mutable.  Stat


