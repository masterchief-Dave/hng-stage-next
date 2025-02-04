/**
 * @function isPrime
 * @description Determine if given number is prime.
 * @param {number} num - A natural number.
 * @return {boolean} - Whether the given number is prime.
 * @see https://en.wikipedia.org/wiki/Prime_number
 * @example isPrime(2) = false
 * @example isPrime(3) = true
 */
const isPrime = (num) => {
  // raise corresponding errors upon invalid inputs
  if (num <= 0 || !Number.isInteger(num)) {
    throw new Error("only natural numbers are supported");
  }

  // handle input being 1
  if (num === 1) return false;

  // iterate from 2 to the square root of num to find a factor
  // return false upon finding a factor
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  // if the entire loop runs without finding a factor, return true
  return true;
};

const getNumberProperties = (num) => {
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");
  return properties;
};

const isPerfectNumber = (num) => {
  if (num <= 1) return false;

  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num;
};

/**
 * @function armstrongNumber
 * @description Check if the provided number is an Armstrong number or not.
 * @summary Armstrong numbers are numbers, the sum of whose digits each raised
 * to the power of the number of digits is equal to the number itself.
 * For example:
 * 370 is an Armstrong number since 3^3 + 7^3 + 0^3 = 370
 * (These numbers are also known as Narcissistic numbers, and Pluperfect numbers)
 * @param {number} num The number you want to check for
 * @return {boolean} Whether the input number is an Armstrong number
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Armstrong_number)
 * @see [OEIS](https://oeis.org/A005188)
 * @example armstrongNumber(370) = true
 * @example armstrongNumber(10) = false
 */
const armstrongNumber = (num) => {
  if (typeof num !== "number" || num <= 0) return false;

  let compNum = 0;
  let cloneNum = num;
  const numOfDigits = Math.floor(1 + Math.log10(num));

  while (cloneNum > 0) {
    compNum += Math.pow(cloneNum % 10, numOfDigits);
    cloneNum = Math.floor(cloneNum / 10);
  }

  return compNum === num;
};

/**
 * @function digitSum
 * @description Calculate the sum of all digits of a natural number (number base 10).
 * @param {number} num - A natural number.
 * @return {number} - Sum of all digits of given natural number.
 * @see https://en.wikipedia.org/wiki/Digit_sum
 * @example digitSum(12) = 3
 * @example digitSum(9045) = 18
 */

const digitSum = (num) => {
  if (num < 0 || !Number.isInteger(num)) {
    throw new Error("only natural numbers are supported");
  }

  let sum = 0;
  while (num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
};

module.exports = {
  isPrime,
  isPerfectNumber,
  getNumberProperties,
  digitSum,
  armstrongNumber,
};
