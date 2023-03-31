type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

const adder: Adder = (x?: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((some, value) => some + value, 0) + (x || 0) + (y || 0);
  return (x || 0) + (y || 0);
};

console.log(adder(1, 2, 5, 9, 1));

export {}
