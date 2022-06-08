// let employee: {
//   id: number;
//   name: string;
// } = { id: 1, name: "Peter" };
// employee.name = "Peter";

//  readonly prevents us from making any changes
// let car: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "ford",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

/* 
Advance 
will use DRY method
*/

// type alias => give a type a new name + prevent us from repeating code.

type Car = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Car = {
  id: 1,
  name: "ford",
  retire: (date: Date) => {
    console.log(date);
  },
};
