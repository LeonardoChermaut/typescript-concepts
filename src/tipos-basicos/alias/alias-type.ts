type Age = number;
type Peaple = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: string;
};

type RgbColor = 'Red' | 'Green' | 'Blue';
type CMYKColor = 'Cyan' | 'Magent' | 'Yellow' | 'Black';
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

//module mode
export {};
