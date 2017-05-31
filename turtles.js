// require in our express for the turtles router
const express = require('express');

// intantiate our router
const router = express.Router();

// add route handlers to our router
// handle a GET request to the root ofthe turtles router
router.get('/', (request, response) => {
  response.status(200).json({message: 'turtles homepage'});
});

// handle a GET request to /about on the turtles router
router.get('/about', (request, response) => {
  response.status(200).json({message: 'turtles about page'});
});

module.exports = router;
