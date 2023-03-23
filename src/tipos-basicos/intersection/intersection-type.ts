type Name = { name: string };
type LastName = { lastName: string };
type Age = { age: number };

type Peaple = Name & LastName & Age;

// & combination intersection;

const peaple: Peaple = {
  name: 'Leonardo',
  lastName: 'Chermaut',
  age: 26,
};

console.log(peaple);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';

type Intersection = AB & AC & AD;

export {};
