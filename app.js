const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => res.send('diabolical!!'));

const port = process.env.PORT || 8086;

app.listen(port, 
    () => console.log(`Server running on port ${port}`));