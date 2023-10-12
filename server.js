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

// const axios = require('axios');

// // Replace 'example.com' with the URL you want to call.
// const url = 'http://example.com';

// axios.get(url)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(`Error: ${error.message}`);
//   });



server.get('/api/process-fpx', (req, res) => {

  const hostDetails = {
    host: req.headers.host,
    origin: req.headers.origin,
    referer: req.headers.referer,
    userAgent: req.headers['user-agent'],
  };
  console.log(hostDetails);
  const txnId = req.body["fpx_fpxTxnId"]
  const sellerId = req.body["merchantName"]

  let service = req.body["service"]

  console.log(service);

  let response = { hostDetails: hostDetails };

  if (txnId && txnId !== "" && txnId !== "0") {



    // condtion to test delayed response
    if (txnId === "1234") {
      setTimeout(() => {
        response.data = {
          success: true,
          message: 'Notification received successfully after a 40-second delay!',
          txnId: txnId,
          sellerId: sellerId
        };
        res.status(200).json(response);
      }, 20000);
    } else if (txnId === "-1") {
      response.data = "No Response"
      console.log(response)
    } else {
      // success response immediate
      response.data = {
        success: true,
        message: 'Notification received successfully!',
        txnId: txnId,
        sellerId: sellerId
      };
      res.status(200).json(response);
    }



  } else {
    // failure response for txn id 0, empty and not passing
    response.data = {
      success: false,
      message: 'Notification failed! Transaction ID is invalid',
    };
    res.status(400).json(response)
  }


});


server.get("/api/process-fpx", (req, res) => {

  res.status(200).json({
    status: "OK",
  })

})

