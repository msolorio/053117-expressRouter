const express = require('express');
const lions = require('./lions');
const turtles = require('./turtles');

const app = express();

// mount lions router to /lions
app.use('/lions', lions);

// mount turtles router to /turtles
// any requests to /turtles are sent to turtles router
app.use('/turtles', turtles);

app.get('/', (request, response) => {
  response.status(200).json({message: 'encylepedia homepage'});
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
