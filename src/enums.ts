/*
Enums/Enumerated types are data structures of constant length that hold
a set of constant values. 
*/

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {
  Small = 0,
  Medium = 1,
  Large = 2,
}
let mySize: Size = Size.Medium;
console.log(mySize);
