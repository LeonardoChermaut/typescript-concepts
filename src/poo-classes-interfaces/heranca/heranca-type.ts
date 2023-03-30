export abstract class Peaple {
  constructor(
    private readonly id: number,
    protected readonly name: string,
    protected readonly lastName: string,
    private readonly age: number,
    protected readonly cpf: string,
  ) {}

  //GETTERS
  getId(): number {
    return this.id;
  }
  getAge(): number {
    return this.age;
  }
  getFullName(): string {
    return `${this.name} ${this.lastName}`
  }
  getCpf(): string {
    return this.cpf;
  }
}

export class Student extends Peaple {}
export class Client extends Peaple {}

// const peaple = new Peaple(1, 'Leonardo', 'Chermaut', 26, '000.000.000-77'); error, because abstract class
const student = new Student(1, 'Leonardo', 'Chermaut', 26, '000.000.000-77');
const client = new Client(1, 'Leonardo', 'Chermaut', 26, '000.000.000-77');
