const express = require('express');
const path = require('path');
const routes = require('./routes');
const cors = require('cors');
const DolevModel = require('./dolev/dolev.model');
const DolevMocks = require('./dolev/dolev.mocks');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();

app.use(cors());
// Static files
app.use(express.static(CLIENT_BUILD_PATH));

app.use('/matan7', async (req, res, next) => {
  const result = await DolevModel.find({ id: 1 });
  if (result.length === 0) {
    const result2 = await DolevModel.insertMany(DolevMocks);
    console.log(result2);
  }
  res.send('done');
});

app.use('/api', routes);

// All remaining requests return the React app, so it can handle routing.
app.get('*', (request, response) => {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
