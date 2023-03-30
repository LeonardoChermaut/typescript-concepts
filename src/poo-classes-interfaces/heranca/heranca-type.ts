export abstract class Peaple {
  constructor(
    private readonly id: number,
    public readonly name: string,
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
    return `${this.name} ${this.lastName}`;
  }
  getCpf(): string {
    return this.cpf;
  }
}

export class Student extends Peaple {
  constructor(
    id: number,
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public classRoom: string,
  ) {
    super(id, name, lastName, age, cpf);
  }

  getFullName(): string {
    return super.getFullName();
  }
}
export class Client extends Peaple {
  getFullName(): string {
    return super.getFullName();
  }
}

// const peaple = new Peaple(1, 'Leonardo', 'Chermaut', 26, '000.000.000-77'); error, because abstract class
const student = new Student(1, 'Leonardo', 'Chermaut', 26, '000.000.000-77', '007');
const client = new Client(1, 'Leonardo', 'Chermaut', 26, '000.000.000-77');
console.log(student.getFullName());
