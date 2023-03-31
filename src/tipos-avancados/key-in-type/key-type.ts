type Vehicle = {
  brand: string;
  year: string;
};

type Car = {
  brand: Vehicle['brand'];
  year: Vehicle['year'];
  name: string;
};

const car: Car = {
  brand: 'Toyota',
  year: '2023',
  name: 'Supra',
};

console.log(car);
