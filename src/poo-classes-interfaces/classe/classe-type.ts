export abstract class Peaple {
  constructor(
    private readonly id: number,
    protected name: string,
    protected lastName: string,
    protected age: number,
    protected cpf: string,
  ) {
    this.id = id;
    this.name = name;
    this.lastName = name;
    this.age = age;
    this.cpf = cpf;
  }

  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getLastName(): string {
    return this.lastName;
  }
}

export class Enterprise {
  constructor(
    private id: number,
    protected name: string,
    protected cnpj: string,
    protected employees: Employee[] = [],
  ) {}

  setEmployee(employee: Employee): void {
    const isEmployee = this.employees.find((e) => e.getName === employee.getName && e.getName === employee.getName);

    isEmployee ? console.log(`Employee already exists.`) : this.employees.push(employee);
  }
  getEmployees():Employee[]{
    console.log(this.employees);
    return this.employees;
  }

  getEmployeeName(name: string): void {
    this.employees.find((employee) => employee.getName() === name)
      ? console.log(`Employee:`, employee.getName())
      : console.log(`Employee with name "${name}" not found.`);
  }

  deleteEmployee(id: number): void {
    const index = this.employees.findIndex((employee) => employee.getId() === id);
    index !== -1
    ? this.employees.splice(index, 1)
    : console.log(`Employee with ID ${id} not found.`);
  }

  updateNameEmployee(id: number, name: string): void {
    const index = this.employees.findIndex((empl) => empl.getId() === id);

    index !== -1
    ? this.employees[index].updateNameEmployee(index, name)
    : console.log(`Employee with ID ${id} not found.`);

  }
}
const enterprise = new Enterprise(1, 'LCTechnologies', '77.777.777/0001-77');

export class Employee extends Peaple {
constructor(
    id: number,
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    private salary: number
  ) {
    super(id, name, lastName, age, cpf);
  }

  static generateRandomEmployees(): Employee[] {

    const employees: Employee[] = [];
    const possibleNames = [
      'Ana',
      'Bianca',
      'Carla',
      'Diego',
      'Eduardo',
      'Felipe',
    ];
    const possibleLastNames = [
      'Silva',
      'Souza',
      'Pereira',
      'Alves',
      'Oliveira',
      'Ferreira',
    ];
    const generateRandomSalary = (): number => Math.floor(Math.random() * 5000 + 3000);
    const generateRandomAge = (): number => Math.floor(Math.random() * 50) + 20;
    const randomNames = (): string => possibleNames[Math.floor(Math.random() * possibleNames.length)];
    const randomLastNames = (): string => possibleLastNames[Math.floor(Math.random() * possibleLastNames.length)];

    const generateRandomCpf = (): string => {
      const firstPart = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      const secondPart = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      const thirdPart = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      const lastPart = Math.floor(Math.random() * 100).toString().padStart(2, '0');
      return `${firstPart}.${secondPart}.${thirdPart}-${lastPart}`;
    }

    for (let i = 0; i < 5; i++) {
      const id = Math.floor(Math.random() * 20);
      const name = randomNames();
      const lastName = randomLastNames();
      const age = generateRandomAge();
      const cpf = generateRandomCpf();
      const salary = generateRandomSalary();

      const employee = new Employee(id, name, lastName, age, cpf, salary);

      employees.push(employee);
      enterprise.setEmployee(employee);
    }
    return employees;
  }

  getId(): number {
    return super.getId();
  }

  getEmployee(): string {
    const employee = `${this.name} ${this.lastName}`;
    return employee;
  }

  updateNameEmployee(id: number, name?: string): void {
    if (id === this.getId()) {
      if (name && name !== this.getName()) {
        this.name = name;
        console.log(`Employee name updated to ${name}`);
      } else {
        console.log(`Invalid name provided or name already matches the existing one.`);
      }
    } else {
      console.log(`Employee with ID ${id} not found.`);
    }
  }

}
const randomEmployees = Employee.generateRandomEmployees();
console.log(randomEmployees);

const employee = new Employee(1, 'Leonardo', 'Chermaut', 26, '000.000.000-77',  Math.floor(Math.random() * 5000 + 3000));
const employeeTwo = new Employee(2, 'Abebe', 'Killah', 35, '000.000.000-00',  Math.floor(Math.random() * 5000 + 3000));

enterprise.setEmployee(employee);
enterprise.setEmployee(employeeTwo);
enterprise.getEmployees();

employee.updateNameEmployee(1, 'Leandro');
enterprise.deleteEmployee(1);
enterprise.getEmployeeName('Leonardo');
enterprise.getEmployeeName('Leandro')
