export const math = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '×': (a, b) => a * b,
  '÷': (a, b) => {
    if (b === 0) return 'Cannot divide by zero'
    return a / b
  },
}
