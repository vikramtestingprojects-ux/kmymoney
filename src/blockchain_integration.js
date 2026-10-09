// Experimental: Blockchain ledger
const hashTransaction = (tx) => {
  return require('crypto').createHash('sha256').update(JSON.stringify(tx)).digest('hex');
};
module.exports = { hashTransaction };