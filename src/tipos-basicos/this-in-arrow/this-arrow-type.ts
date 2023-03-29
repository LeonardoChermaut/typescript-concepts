function example(this: unknown, arg: string): void {
  console.log(this);
  console.log(arg);
}

example.call(new Date(), 'Leonardo');
example.apply(new Date(), ['Leonardo']);
