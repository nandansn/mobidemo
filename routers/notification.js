const express = require("express");
const notificationRouter = express.Router();


notificationRouter.post('/ipn', function (req, res) {


    let { responseData } = req.body;
    
    console.log(req.body)
  
    res.status(200).json(
        {
            "responseCode": "0000"
            // "responseMessage": "SUCCESS",
            // "responseDescription": "Registered Successfully Payout",   
            // "responseData": {
            //     "trxId": "PO_24061306013111395"
            // }
        }
    )
  
  });


  module.exports = { notificationRouter };