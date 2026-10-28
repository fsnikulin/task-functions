export function higherThan(num) {
  return (n) => n > num;
}

export function hasSubstring(substr) {
  return (str) => str.includes(substr);
}

export function multiply(num) {
  return (x) => num * x;
}