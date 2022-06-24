const luhn = (rawInput: string): void => {
  // Remove whitespace
  const input = rawInput.replace(/\s/g, '');

  if (
    !Number.isInteger(Number(input)) ||
    Number(input) % 1 !== 0
  ) { 
    exit(42, 'Input is not an integer');
  }

  const inputList = input.split('').map(Number);

  if (inputList.length === 1) {
    exit(42, 'Input cannot be a single digit');
  }

  let totalSum = 0;
  // Perform Luhn algorithm
  inputList.reverse().forEach((value, index) => {
    if(index % 2 !== 0) {
      let doubled = value * 2;
      if (doubled > 9) {
        totalSum -= 9;
      }      
      totalSum += doubled;
    } else {
      totalSum += value;
    }
  });
  
  if (totalSum % 10 !== 0) {
    exit(42, '❌ Your credit card number is invalid');
  }

  exit(0, '✅💸 Your credit card number is valid');
}

const exit = (exitCode: number, message?: string) => {
  if (message) {
    console.log(message);
  }

  console.log('Exiting with code:', exitCode);
  process.exit(exitCode);
}

export default luhn;