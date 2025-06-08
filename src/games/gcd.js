const brainGcd = () => {
  const num1 = Math.round(Math.random() * 50);
  const num2 = Math.round(Math.random() * 50);
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a >= b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = `${a + b}`;
  return [`${num1} ${num2}`, answer];
};
export default brainGcd;
