type CollorsObject = typeof collorObj;
type CollorIndex =  keyof CollorsObject;

const collorObj = {
  red: 'red',
  green: 'green',
  blue: 'blue',
}

const translateCollor = (color: CollorIndex, collors: CollorsObject) =>{
  return collors[color]
}
console.log(translateCollor('red', collorObj));

