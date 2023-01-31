const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
let number = 0;

for (let i = 0; i < numeritos.length; i++) {
  number = numeritos[i];
  console.log({ i, number });
}
*/

function recursiva(numbersArray) {
  if (numbersArray.length != 0) {
    const fistNumber = numbersArray[0];
    console.log(fistNumber);
    numbersArray.shift();
    recursiva(numbersArray);
  }
}

recursiva(numeritos);