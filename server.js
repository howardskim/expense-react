const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const transactions = require('./routes/transaction');
const connectDB = require('./config/db');
dotenv.config({
    path: './config/config.env'
});
connectDB();
const app = express();
app.use(express.json())
app.use('/api/v1/transactions', transactions)
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running in ${process.env.PORT} on port ${PORT.yellow.bold}`));