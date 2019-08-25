const express = require('express');
const connectDB = require('./config/db');
const app = express();

var cors = require('cors');

connectDB();

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Hello there...'));
app.use('/api/books', books);

const port = process.env.PORT || 8086;

app.listen(port, 
    () => console.log(`Server running on port ${port}`));