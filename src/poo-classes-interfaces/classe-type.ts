export class Enterprise {
  constructor(
    public readonly name: string,
    protected readonly cnpj: string,
    private readonly employees: Employee[] = [],
  ) {}

  //SET
  setEmployee(employee: Employee): void {
    const isEmployee = this.employees.find((e) => e.name === employee.name && e.lastName === employee.lastName);

    if (isEmployee) {
      console.log(`Employee ${employee.name} ${employee.lastName} already exists.`);
    } else {
      this.employees.push(employee);
      console.log('Employee created!')
    }
  }

  //GET
  public getEmployeeName(name: string): void {
    this.employees.find((employee) => employee.name === name)
      ? console.log(`Employee Found: `, employee)
      : console.log(`Employee with name "${name}" not found.`);
  }
}

const enterprise = new Enterprise('LCTechnologies', '77.777.777/0001-77');

export class Employee {
  constructor(public readonly name: string, public readonly lastName: string) {}
  getEmployeeName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const employee = new Employee('Leonardo', 'Chermaut');
enterprise.setEmployee(employee);

const employeeTwo = new Employee('Leonardo', 'Chermaut');
enterprise.setEmployee(employeeTwo);

enterprise.getEmployeeName('Leonardo');
