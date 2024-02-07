const express = require('express');
const cors = require('cors');
const router = require('./routes');
const handleErrors = require('./handleErrors');
const schedule = require('node-schedule');
const request = require('request');



const app = express();
app.use(cors());

app.use(express.json());

app.use('/api', router);

app.use(handleErrors);

module.exports = app;

const job = schedule.scheduleJob('45 3 * *', function () {
  request(
    { uri: 'http://localhost:3000/api/rooms', method: 'DELETE' },
    function (error, response, body) {
      console.log(body);
    }
  );
  request(
    { uri: 'http://localhost:3000/api/users', method: 'DELETE' },
    function (error, response, body) {
      console.log(body);
    }
  );
});
