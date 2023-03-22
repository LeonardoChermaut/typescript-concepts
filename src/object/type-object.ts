const objExample: object = {}; //bad
const objExampleTwo: {} = {}; //bad
const obj = { keyA: 'string', keyB: 'string' }; //good

const objExmpleThree: Record<string, unknown> = { //ok, but have any problems
  keyA: 'string',
  keyB: 'string',
};

obj.keyA = 'new value'; //possible change value vey in obj
// obj.keyC = 'new key'; //impossible create a new key in obj (error)
