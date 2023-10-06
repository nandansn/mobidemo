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
  const txnId = req.body["fpx_fpxTxnId"]
  const sellerId = req.body["fpx_sellerId"]

  let service = req.body["service"]

  console.log(service);
  
  let response = {};

  if (txnId && txnId !== "" && txnId !== "0") {

  // Here you can perform any processing required and return a success response
  // For now, we'll simply return a success message

  let timeout = 0;
  
  // condtion to test delayed response
  if (txnId === "1234") {
    setTimeout(() => {
      const response = {
        success: true,
        message: 'Notification received successfully after a 40-second delay!',
        txnId: txnId,
        sellerId: sellerId
      };
      res.status(200).json(response);
    }, 20000);
  } else {
    // success response immediate
    response = {
      success: true,
      message: 'Notification received successfully!',
      txnId: txnId,
      sellerId: sellerId
    };
    res.status(200).json(response);
  }

 
   
} else {
  // failure response for txn id 0, empty and not passing
  response = {
    success: false,
    message: 'Notification failed! Transaction ID is invalid',
  };
  res.status(400).json(response)
}

  
});


