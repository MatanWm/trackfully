const express = require('express');
const path = require('path');
const routes = require('./routes');
const cors = require('cors');
const DolevModel = require('./dolev/dolev.model');
const DolevMocks = require('./dolev/dolev.mocks');
var bodyParser = require('body-parser');


// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();
app.use(bodyParser());

app.use(cors());

app.use(express.static(CLIENT_BUILD_PATH));


// Db reset
app.use('/dbreset', async (req, res) => {
  await DolevModel.deleteMany();

  await DolevModel.insertMany(DolevMocks);
  res.send('done');
});

app.use('/api', routes);

// All remaining requests return the React app, so it can handle routing.
app.get('*', (request, response) => {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
