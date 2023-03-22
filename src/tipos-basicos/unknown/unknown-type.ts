let x: unknown;
x = 700;
x = '777';
x = '@#$%¨&*';
const y = 7;

//unknown need verification after proceed
// console.log(x + y); error

if (typeof x === 'number') console.log(x + y);

export {};
