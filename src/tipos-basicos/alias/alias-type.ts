type Age = number;
type Peaple = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: string;
};

type CMYKColor = 'Cyan' | 'Magent' | 'Yellow' | 'Black';
type RgbColor = 'Red' | 'Green' | 'Blue';
type Model = 'Sport' | 'Sedan' | 'Hatch';
type Color = RgbColor | CMYKColor;

const peaple: Peaple = {
  name: 'Leonardo',
  age: 26,
  salary: 3600.0,
  favoriteColor: 'Green',
};

const setFavoriteColor = (peaple: Peaple, color: Color): Peaple => {
  return { ...peaple, favoriteColor: color };
};

console.log(setFavoriteColor(peaple, 'Blue'));
console.log(peaple);

type Car = {
  name: string;
  model: Model;
  color: string;
  maxSpeed: number;
  consumption: string;
  yearFabrication: string;
};

const setOtimizeCar = (
  name: string,
  model: Model,
  color: string,
  speed: number,
  consumption: string,
  fabrication: string,
): Car => {
  return {
    name: name,
    model: model,
    color: color,
    maxSpeed: speed,
    consumption: consumption,
    yearFabrication: fabrication,
  };
};

const optimizedCar = setOtimizeCar('Subaru', 'Sport', 'Red', 250.0, '10KM/L', '1996-11-21');
console.log(optimizedCar);

//module mode
export {};
