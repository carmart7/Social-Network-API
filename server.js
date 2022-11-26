const db = require('./config/connection');
const { User, Thought } = require('./models')

db.once('open', () => {
    // callback to run express app listen in the future
    console.log('working db opened');
});