import readline from 'readline';
import luhn from './luhn';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please enter your credit card number.\n', luhn);