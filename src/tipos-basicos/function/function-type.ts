type MapStringsCallback = (element: string) => string;
const abc = ['a', 'b', 'c'];

//example
function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }
  return newArray;
}

const mappedAbc = mapStrings(abc, (element: any) => element.toUpperCase());
console.log(mappedAbc);

//new method
const mappedType = mapStrings(abc, (element) => element.toUpperCase());
console.log(mappedType);
