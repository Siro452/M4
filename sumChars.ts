//console log parameters for function
export default function sumChars(carModel: string, carYear: number) {
  // filter carmodel to only get letters
  let myNumber = carModel.replace(/[0-9\s]/g, "");
  //loops through every letter and assigns each letter with a number
  let i,
    n = myNumber.length,
    acc = 0;
  for (i = 0; i < n; i++) {
    //adds each letter assigned number to each other, - 9 to subtract from radix 36 to = 26
    acc += parseInt(myNumber[i], 36) - 9;
  }
  //add total of the loop with the second param of year
  let totalSum = acc * 100 + Number(carYear);

  if (totalSum < 0) {
    return "number cannot be a negative";
  } else if (isNaN(totalSum)) {
    return "invalid character";
  } else return "$" + totalSum;
}

console.log(sumChars("civic", 3014));
