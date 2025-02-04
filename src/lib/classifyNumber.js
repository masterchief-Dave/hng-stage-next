const axios = require("axios");
const {
  isPrime,
  isPerfectNumber,
  getNumberProperties,
  digitSum,
} = require("./mathUtils");

const classifyNumber = async (req, res) => {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ number: null, error: true });
  }

  if (typeof number !== "string" || number.trim() === "" || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const parsedNumber = Number(number);
  if (!Number.isInteger(parsedNumber)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(Math.abs(number), 10);

  try {
    const funFactResponse = await axios.get(
      `http://numbersapi.com/${num}/math?json`
    );
    const funFact = funFactResponse.data.text;

    res.json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfectNumber(num),
      properties: getNumberProperties(num),
      digit_sum: digitSum(num),
      fun_fact: funFact,
    });
  } catch (error) {
    res.status(500).json({
      number: num,
      error: true,
    });
  }
};

module.exports = classifyNumber;
