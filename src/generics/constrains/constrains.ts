type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

const getKeyFn: GetKeyFn = (obj, key) => obj[key];

const bird = {
  collor: 'purple',
  foods: ['strowbarry', 'aplle'],
  speed: 110,
};

const foods = getKeyFn(bird, 'foods');
const collor = getKeyFn(bird, 'collor');
console.log(foods, collor, getKeyFn(bird, 'speed'));
