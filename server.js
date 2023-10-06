require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');

const server = express();


// middleware
server.use(morgan("tiny"));
server.use(express.json());

// start server only db is started

const startServer = async () => {
  try {
  
    let port = process.env.PORT || 3000;
    server.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error during server startup: ", error.message, error.name);
  }
};



startServer();





// Use middleware to parse JSON requests
server.use(bodyParser.json());

// Define a route to handle POST requests with the JSON data
server.post('/api/process-fpx', (req, res) => {
  // Assuming the JSON data is sent in the request body
  const requestData = req.body;

  // Here you can perform any processing required and return a success response
  // For now, we'll simply return a success message
  const response = {
    success: true,
    message: 'Notification received successfully!',
  };

  res.status(200).json(response);
});


