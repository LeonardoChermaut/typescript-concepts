const add = (a: unknown, b: unknown): number | string => {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a} ${b}`;
};

console.log(add('1', 2));
console.log(add(1, 9));

type Peaple = { name: string };
type Animal = { color: string };
type PeapleOrAnimal = Peaple | Animal;

class Student implements Peaple {
  constructor(public name: string) {}
}

const showName = (obj: PeapleOrAnimal): void => {
  if ('name' in obj) console.log(obj.name);
};

showName(new Student('Leonardo'));

export {};
