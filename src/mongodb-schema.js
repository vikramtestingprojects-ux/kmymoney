// MongoDB schema definition
const transactionSchema = {
  bsonType: 'object',
  required: ['date', 'amount', 'description'],
  properties: {
    _id: { bsonType: 'objectId' },
    date: { bsonType: 'date' },
    amount: { bsonType: 'decimal' },
    description: { bsonType: 'string' },
    category: { bsonType: 'string' }
  }
};