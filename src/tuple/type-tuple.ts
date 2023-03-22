//mutable
const dataMutable: [number, string] = [1, 'Joaquim']
dataMutable[0] = 7
dataMutable.pop();
dataMutable.push();

//immutable
const dataClient: readonly [number, string?, ...string[]] = [1, 'Leonardo'];

// or generics immutable
// readyOnly dont have methods pop(); or push();
const dataClientImmutable: ReadonlyArray<string> = ['Leonardo', 'Chermaut'];
console.log(dataClient);
