let x;
if (typeof x === 'undefined') {
  x = 20;
}

console.log(x * x);

export const createPerson = (
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} => {
  return {
    firstName,
    lastName,
  };
};

export const squareOf = (x: any) => {
  if (typeof x === 'number') return x * x;
  return null;
};

const squareOfTwoNumber = squareOf(2);
const squareOfThreeNumber = squareOf('2');

if (typeof squareOfThreeNumber === null) {
  throw Error;
} else {
  console.log(squareOfThreeNumber);
}
