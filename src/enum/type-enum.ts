enum Colors {
  RED, //0
  BLUE, //1
  YELLOW, //2
}

console.log(Colors);

const selectColor = (color: Colors): void => {
  const colorSelected = Colors[color];
  console.log(`The color selected is: ${colorSelected}`);
};

selectColor(0);
