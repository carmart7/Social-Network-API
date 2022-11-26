const db = require('./config/connection');

db.once('open', () => {
    // callback to run express app listen in the future
})