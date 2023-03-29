// eslint-disable
let x = 10;
x = 0b1010;

// literal type
const y = 10;

let a = 100 as const; // eslint-disable-line

const example = {
  name: 'Leonardo' as const, // name dont mutable because as const
  lastName: 'Chermaut',
};

// error, immutable because as const in properties object
// example.name = 'Example';

const selectColor = (color: 'RED' | 'YELLOW' | 'BLUE'): string => {
  if (!color) {
    console.log('Invalid color selected');
  }
  return color;
};

console.log(selectColor('RED'));

//Module mode
export {};
