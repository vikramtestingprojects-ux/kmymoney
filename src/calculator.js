function calculateTransactionSum(transactions, startDate, endDate) {
  return transactions
    .filter(t => t.date >= startDate && t.date < endDate)
    .reduce((sum, t) => sum + t.amount, 0);
}