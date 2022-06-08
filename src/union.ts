/*
Union Types(advance) 
Allows us to store multiple type of values.
Allows us to define a variable with multiple types.
*/

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

/* 
Intersection types
Creates new way of combining multiple existing types
*/
let weight: number & string;
