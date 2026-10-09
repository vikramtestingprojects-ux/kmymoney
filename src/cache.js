class TransactionCache {
  constructor() {
    this.cache = new Map();
  }
  
  clear(id) {
    this.cache.delete(id);
  }
  
  clearAll() {
    this.cache.clear();
  }
}