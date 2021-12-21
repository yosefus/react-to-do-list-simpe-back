const express = require('express');
const app = express();

require('dotenv').config();

const cors = require('cors');
app.use(cors());

const { connect } = require('./db');
app.use(express.json()); //json config

connect().then(console.log('connect to the db'));

const router = require('./router');

app.use('/api', router);

const port = process.env.PORT;
app.listen(port || 4001, () => console.log('connected on port 4001'));
