function monthlySavings(payments, livingCost) {
  let totalIncome = 0;

  for (let i = 0; i < payments.length; i++) {
    if (payments[i] >= 3000) {
      totalIncome += payments[i] * 0.8;
    } else {
      totalIncome += payments[i];
    }
  }

  let savings = totalIncome - livingCost;

  if (savings >= 0) {
    return savings;
  } else if (savings < 0) {
    return "earn more";
  }

  if (Array.isArray(payments) == false || livingCost == "number") {
    return "invalid input";
  }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));