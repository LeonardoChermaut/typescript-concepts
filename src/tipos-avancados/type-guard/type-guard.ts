const add = (a: unknown, b: unknown): number | string => {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a} ${b}`;
};

console.log(add('1', 2));
console.log(add(1, 9));

type Peaple = { type: 'Peaple'; name: string };
type Animal = { type: 'Animal'; name: string };
type PeapleOrAnimal = Peaple | Animal;

class Student implements Peaple {
  type = 'Peaple' as const;
  constructor(public name: string) {}
}

const showName = (obj: PeapleOrAnimal): void => {
  // if ('name' in obj) console.log(obj.name);
  switch (obj.type) {
    case 'Peaple':
      console.log(`Type: ${obj.type} Name: ${obj.name}`);
      return;
    case 'Animal':
      console.log(`Type: ${obj.type} Name: ${obj.name}`);
      return;
  }
};

showName(new Student('Leonardo'));
showName({ type: 'Animal', name: 'Guepardo' });

export {};
