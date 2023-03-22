/* eslint-disable */
//Tipos básico (aqui ocorre inferencia de tipos)
const nome: string = 'Leonardo'; //qualquer tipo de string
const idade: number = 30; //10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
const adulto: boolean = true; // true or false
const simbolo: symbol = Symbol('qualquer-symbol'); //symbol
// const big: bigint = 10n; //bigint

//Arrays
const arrayNumbers: Array<number> = [1, 5, 9];
const arrayStrings: Array<string> = ['69', '55'];

//Objeto
let human: {
  nome: string;
  idade: number;
  adulto?: boolean;
};

const peapleInformation = {
  name: 'Darth',
  lastName: 'Vader',
  age: 25,
  adult: true,
  displayName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

//Utilize ANY apenas ultimo caso.
const showMessage = (msg: string) => msg;

const message = showMessage('Hello');
console.log(message);

//Tipo VOID
const noReturn = (...args: string[]): void => {
  console.log(args.join(' '));
};

noReturn('Leonardo', 'Chermaut');
peapleInformation.displayName();
