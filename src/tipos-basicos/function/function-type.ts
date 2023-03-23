//example
function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const mappedAbc = mapStrings(abc, (element: any) => {
  return element.toUpperCase();
});

console.log(mappedAbc);

//new method
type MapStringsCallback = (element: string) => string;
const mappedType = mapStrings(abc, (element) => element.toUpperCase());

console.log('mapped with type', mappedType);
