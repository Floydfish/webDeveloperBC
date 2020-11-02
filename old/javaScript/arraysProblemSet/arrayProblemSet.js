const array = [1, 2, 3, 4];

const array1 = ["a", "b", "c"];

const array2 = [1, 1, 1 , 1];

const array5 = [1, 1, 1 , 1, 5];

const array3 = [-5, 4, 100];

const array4 = [-5, 4, 100, 6];

function printReverse(arr) {
  arr.reduceRight(
    (_, item) => console.log(item), null
  );
};

function printReverse1(arr) {
  arr.slice().reverse()
    .forEach(element => {
      console.log(element)
    });
}

function isUniform(arr) {
  const first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

const sumArray = (array) => {
  let sum = 0;
  array.forEach(element => {
    sum += element
  });
  return sum
}

function max(array) {
  let num = array[0];
  for (let i = 1; i < array.length; i++) {
    if (num < array[i]) {
      num = array[i] 
    }
  }
  return num;
}

