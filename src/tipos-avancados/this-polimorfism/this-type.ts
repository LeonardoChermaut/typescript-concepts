export class Calculator {
  constructor(public number: number) {}

  add(number: number): this {
    this.number += number;
    return this;
  }

  sub(number: number): this {
    this.number -= number;
    return this;
  }

  div(number: number): this {
    this.number /= number;
    return this;
  }

  mul(number: number): this {
    this.number *= number;
    return this;
  }
}

const calculator = new Calculator(10);
calculator.add(5).div(2).sub(2).mul(9);
console.log(calculator);

// Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | undefined = undefined;
  private url: string | undefined = undefined;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Sending data in ${this.method} to ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl(`https:github.com/leonardochermaut`).setMethod('post').send();
