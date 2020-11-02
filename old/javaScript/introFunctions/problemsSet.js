const isEven = num => {
  return num % 2 === 0;
};

const factorial = num => {
  let sum = 1;
  for (num; num > 0; num--) {
    sum *= num;
  }
  return sum
};

const kebabToSnake = str => {
  return str.replace(/-/g, "_")  ;
}

