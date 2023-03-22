interface TemNome {
  nome: string;
}

interface TemSobrenome {
  sobrenome: string;
}

class Aluno implements TemNome, TemSobrenome {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number,
  ) {}
}

console.log('-------Instancia de aluno--------');
const aluno = new Aluno('Leonardo', 'Chermaut', 26);
console.log(aluno); //Aluno { nome:'Leonardo', sobrenome:'Chermaut', idade: 26 }

abstract class Animal {
  abstract makeNoise(): void;
}

class Dog extends Animal {
  constructor(private readonly name: string) {
    super();
  }
  makeNoise(): void {
    console.log(`${this.name} is barking`);
  }
}

console.log('\n\n--------Instancia de animal--------');

const dog = new Dog('Spyke');
dog.makeNoise(); //retorno Spyke is barking.

type CalculatorFn = (x: number, y: number) => number;

const add: CalculatorFn = (x, y) => x + y;
const sub: CalculatorFn = (x, y) => x - y;
const mul: CalculatorFn = (x, y) => x * y;
const div: CalculatorFn = (x, y) => x / y;

const twoPlusTwo = add(2, 2);
const twoMinusTwo = sub(2, 2);
const twoTimesTwo = mul(2, 2);
const twoDividedByTwo = div(2, 2);

console.log(twoPlusTwo); //4
console.log(twoMinusTwo); // 0
console.log(twoTimesTwo); //4
console.log(twoDividedByTwo); //1

//Types são como enums
type ProgrammingLanguages = 'React' | 'JavaScript' | 'TypeScript';

const sayFavoriteProgrammingLanguage = (language: ProgrammingLanguages) => {
  return `You like ${language}`;
};

console.log('\n\n--------Instancia function sayMyFavoriteLanguage--------');
const favoriteLanguage = sayFavoriteProgrammingLanguage('TypeScript');
console.log(favoriteLanguage);
