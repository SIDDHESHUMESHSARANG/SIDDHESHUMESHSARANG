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
    origin: function (origin, callback) {
        if (!origin) return callback(null,true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.'
            return callback(new Error(msg), false);
        }
        return callback(null,true);
    }
}));

app.use('/api/posts', require('./routes/app.routes.js'));


app.get('/', (req,res) => {
    res.send('server running!')
})
app.listen(4000, () => {
    console.log('server running')
})