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
      console.log(' CREATE EMPLOYEE \nEmployee created!');
    }
  }

  //GET
  getEmployeeName(name: string): void {
    this.employees.find((employee) => employee.name === name)
    ? console.log(` GET NAME \nEmployee: `, employee)
    : console.log(`Employee with name "${name}" not found.`);
  }

  //DELETE
  deleteEmployee(id: number): void {
    const index = this.employees.findIndex((employee) => employee.getId() === id);
    if (index !== -1) {
      this.employees.splice(index, 1);
      console.log(` DELETE EMPLOYEE \nEmployee with ID ${id} deleted!`);
    } else {
      console.log(` DELETE EMPLOYEE \nEmployee with ID ${id} not found.`);
    }
  }

  //UPDATE
  updateEmployee(id: number, employee: Employee): void {
    const index = this.employees.findIndex((empl) => empl.getId() === id);
    if (index !== -1) {
      this.employees[index].updateEmployee(employee.name, employee.lastName);
      console.log(` UPDATE EMPLOYEE \nEmployee with ID ${id} updated!`);
    } else {
      console.log(` UPDATE EMPLOYEE \nEmployee with ID ${id} not found.`);
    }
  }

}

const enterprise = new Enterprise('LCTechnologies', '77.777.777/0001-77');

export class Employee {
  constructor(
    private id: number,
    public name: string,
    public lastName: string,
  ) {}

  getId(): number {
    return this.id;
  }

  getEmployee(): string {
    const employee = `${this.name} ${this.lastName}`;
    return employee;
  }

  updateEmployee(name?: string, lastName?: string): void {
    if (name && name !== this.name) {
      this.name = name;
    }
    if (lastName && lastName !== this.lastName) {
      this.lastName = lastName;
    }
  }

}

const employee = new Employee(1, 'Leonardo', 'Chermaut');
const employeeTwo = new Employee(2, 'Abebe', 'Killah');
enterprise.setEmployee(employee);
enterprise.setEmployee(employeeTwo);


//enterprise.deleteEmployee(1);
enterprise.getEmployeeName('Leonardo');
