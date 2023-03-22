//mutable, because dont have a readonly
const dataMutable: [number, string] = [1, 'Joaquim'];
dataMutable[0] = 7;
dataMutable.pop();
dataMutable.push();

//immutable because have readonly prefix
const dataClient: readonly [number, string?, ...string[]] = [1, 'Leonardo'];

// generics type immutable readyOnlyArray, dont have methods pop(); or push();
const dataClientImmutable: ReadonlyArray<string> = ['Leonardo', 'Chermaut'];
console.log(dataClient);
