require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');

const { payoutRouter } = require('./routers/payout-service')
const { razorpayRouter } = require('./routers/razorpay-payout')
const { callBackRouter } = require('./routers/callback')


const { amBankRouter } = require('./routers/ambank-payout')

const { notificationRouter } = require('./routers/notification')

const server = express();


// middleware
server.use(morgan("tiny"));
server.use(express.json());

server.use(bodyParser.json());

server.use('/api/v1',payoutRouter)
server.use('/api/PaymentAPI/v3.0',amBankRouter)
server.use('/curlec-services/payouts',razorpayRouter)
server.use('/mobi/payout',notificationRouter)
server.use('/merchant',callBackRouter)


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



server.get('/api/process-fpx-no-re', (req, res) => {

  console.log('no response from server')
  
});

server.get('/api/process-fpx', (req, res) => {

  const callBackParam = req.query.callBack;

  let callBackObject;
  try {
    callBackObject = JSON.parse(decodeURIComponent(callBackParam));
    
    res.status(200).json({
      message: 'Request processed successfully',
      callBackObject: callBackObject
    });
  } catch (error) {

    console.error('Error parsing callBackParam:', error);
    res.status(400).json({
      error: 'Invalid callBackParam'
    });
  }
});

server.post('/api/PaymentAPI/v3.0/PostCreditTransfer/:SRCPREFIXID',(req, res) => {

  const sourceRefID = req.params.SRCPREFIXID;
  console.log(sourceRefID);

  if (sourceRefID === '-1') {
    res.status(200).json({ ResponseCode : '0001', ResponseMessage : 'failure', transactionStatus:'ACSP', debitorBalance: '0'})
  } else {
    res.status(200).json({ ResponseCode : '0000', ResponseMessage : 'success', transactionStatus:'ACSP', debitorBalance: '25000'}) 
  }
 })


 server.post('/api/PaymentAPI/v3.0/GetAccountEnquiry/:SRCPREFIXID',(req, res) => {

  console.log("This is Payout API - GetAccountEnquiry")

  const sourceRefID = req.params.SRCPREFIXID;

  
  console.log(sourceRefID);

  res.status(200).json({ ResponseCode : '0000', ResponseMessage : 'success'})
 })



 server.get('/api/v1/payout/:PAYOUT_ID',(req, res) => {

  const payoutId = req.params.PAYOUT_ID;
  console.log({"payout_id":payoutId});

  if (payoutId === 'PO_23111511156416863') {
    res.status(200).json({
      "responseCode": "0000",
      "responseMessage": "SUCCESS",
      "responseDescription": "Retrieving Payout Records was Successful",
      "responseData": {
          "customerName": "SMITH",
          "merchantName": "SWEET CORNER",
          "transactionId": payoutId,
          "amount": "10.22",
          "bankName": "Ambank Malaysia Berhad",
           "bankAccNo": "8881048358879"
      }
  }) 
  } else {
    res.status(200).json({
      "responseCode": "0001",
      "responseMessage": "FAILURE",
      "responseDescription": "Payout Failed",
      "failureReason": "Transaction Invalid"
  })
  }
 })