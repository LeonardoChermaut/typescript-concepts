const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7];
console.log(arrayNumbers);

const asyncPromisse = async () => 1;

const otherAsyncPromisse = (ms: number): Promise<number> => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(1);
      reject();
    }, ms),
  );
};

asyncPromisse().then((result) => console.log('Async ', result + 1));
otherAsyncPromisse(1000).then((result) => console.log('Other ', result + 1));
export {};
