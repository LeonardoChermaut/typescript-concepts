interface ProtocolPeaple<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

const student: ProtocolPeaple<string, number> = {
  name: 'Leonardo',
  lastName: 'Chermaut',
  age: 26,
};

console.log(student);
