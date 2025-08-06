const express = require('express');
const db = require('./db/db.js');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(express.json());

db(); // Connect to the database
const allowedOrigins = [
    process.env.FRONTEND_PROD
];

app.use(cors({
  origin: process.env.FRONTEND_PROD,
  credentials: true,
}));



app.use('/api/posts', require('./routes/app.routes.js'));


app.get('/', (req,res) => {
    res.send('server running!')
})
app.listen(process.env.PORT || 4000, () => {
    console.log('server running')
})