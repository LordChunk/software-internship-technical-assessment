import luhn from './luhn';

const stdin = process.stdin;

console.log('Please enter your credit card number.');

stdin.addListener('data', (data) => {
  const input = data.toString().trim();
  luhn(input);
});