type FilterCallback<U> = (
  value: U,
  index?: number,
  array?: U[],
) => boolean;

const cloneFilter = <T>(array: T[], callbackFn: FilterCallback<T>): T[] => {
  const newArray = [];

  for (let index = 0; index < array.length; index++) {
    if (callbackFn(array[index])) {
      newArray.push(array[index]);
    }
  }
  return newArray;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const defautFilter = array.filter((value) => value > 5);
const manualFilter = cloneFilter(array, (value) => value > 5);

console.log('Default: ', defautFilter);
console.log('Manual:  ', manualFilter);
export {};
