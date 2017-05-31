// include express for our lions router
const express = require('express');

// instantiate our express router
const router = express.Router();

// handle GET requests to the root of our router
router.get('/', (request, response) => {
  response.status(200).json({message: 'lions homepage'});
});

// handles GET requests to /about route on our router
router.get('/about', (request, response) => {
  response.status(200).json({message: 'lions about page'});
});

module.exports = router;
