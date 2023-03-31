type Vehicle = {
  brand: string;
  year: string;
};

type Car = {
  name: string;
  brand: Vehicle['brand'];
  year: Vehicle['year'];
};

const car: Car = {
  name: 'Supra',
  brand: 'Toyota',
  year: '2023',
};

console.log(car);

export {}
