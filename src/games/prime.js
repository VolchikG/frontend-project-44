const brainPrime = () => {
  const num = Math.round(Math.random() * 100) + 2;
  const numD = Math.round(Math.sqrt(num));
  for (let i = 2; i <= numD; i += 1) {
    if (num % i === 0) {
      return [num, 'no'];
    }
  }
  return [num, 'yes'];
};
export default brainPrime;
