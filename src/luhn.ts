
const parseInput = (stringInput: string): void => {
  if (
    !Number.isInteger(Number(stringInput)) ||
    Number(stringInput) % 1 !== 0
  ) { 
    exit(42, 'Input is not an integer');
  }

  const inputList = stringInput.split('').map(Number);

  // Do not accept single digit numbers
  if (inputList.length === 1) {
    exit(42, 'Input is a single digit');
  }

  let totalSum = 0;
  // Double every second digit from right to left
  inputList.forEach((value, index) => {
    if(index % 2 === 0) {
      const doubled = value * 2;

      // If doubled is greater than 9, subtract 9
      if (doubled > 9) {
        totalSum -= 9;
      }
      totalSum += doubled;
    }
  });
  
  // if totalSum is divisible by 10, then the number is valid
  if (totalSum % 10 !== 0) {
    exit(42, 'Your credit card number is invalid');
  }

  // console.log('The number is valid');
  process.exit(0);
}

const exit = (exitCode: number, message?: string) => {
  if (message) {
    console.log(message);
  }

  console.log('Exiting with code:', exitCode);
  process.exit(exitCode);
}


export default parseInput;