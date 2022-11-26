const db = require('./config/connection');
const express = require('express');
const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    // callback to run express app listen in the future
    console.log('working db opened');
    app.listen(PORT, () => {
        console.log(`Social Network API running on port ${PORT}`)
    });
});