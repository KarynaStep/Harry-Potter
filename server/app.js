const express = require('express');
const cors = require('cors');
const router = require('./routes');
const handleErrors = require('./handleErrors');
const schedule = require('node-schedule');
const request = require('request');
const { BASE_URL } = require('./constants');



const app = express();
app.use(cors());

app.use(express.json());

app.use('/api', router);

app.use(handleErrors);

module.exports = app;


const job = schedule.scheduleJob('45 3 * *', function () {
  console.log('del');
  request({
    uri: `http://${process.env.API_HOST || BASE_URL}/api/rooms`,
    method: 'DELETE',
  });
  request({
    uri: `http://${process.env.API_HOST || BASE_URL}/api/rooms`,
    method: 'DELETE',
  });
});
