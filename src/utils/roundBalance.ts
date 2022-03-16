export function roundBalance(balance: string, decimals: number = 2) {
  return parseFloat(Number(balance).toFixed(decimals));
}
