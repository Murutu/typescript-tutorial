let employee: {
  id: number;
  name: string;
} = { id: 1, name: "Peter" };
employee.name = "Peter";

//  readonly prevents us from making any changes
let car: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "ford",
  retire: (date: Date) => {
    console.log(date);
  },
};
