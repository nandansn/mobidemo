const express = require("express");
const payoutRouter = express.Router();


payoutRouter.post('/payoutservice', function (req, res) {


    let { bankName, subMID, amount, customerName, payoutid } = req.body;

    console.log(bankName);
    

    if (bankName !== 'Ambank Malaysia Berhad') {

        res.status(201).json({
            "responseCode": "0001",
            "responseMessage": "FAILURE",
            "responseDescription": "Payout Failed",
            "failureReason": "Non-Active Status"
        })

    } else if (subMID !== '201100000012450') {
        res.status(201).json({
            "responseCode": "0001",
            "responseMessage": "FAILURE",
            "responseDescription": "Sub-Merchant MID InValid",
            "responseData": {}
        })
    } else if (parseFloat(amount) < 0) {
        res.status(201).json({
            "responseCode": "0001",
            "responseMessage": "FAILURE",
            "responseDescription": "Amount Field is Invalid",
            "responseData": {}
        })

    } else if (customerName === '' || customerName === undefined) {
        res.status(201).json({
            "responseCode": "0001",
            "responseMessage": "FAILURE",
            "responseDescription": "Customer Name is Missing",
            "responseData": {}
        })

    } else if (payoutid === '866434345') {
        res.status(201).json({
            "responseCode": "0001",
            "responseMessage": "FAILURE",
            "responseDescription": "PayoutId Already Exists",
            "responseData": {}
        })
    }
    
    else {
        res.status(201).json({
            "responseCode": "0000",
            "responseMessage": "SUCCESS",
            "responseDescription": "Registered Successfully Payout",
            "responseData": {
                "trxId": "PO_23111511156416863"
            }
        })

    }

});

module.exports = { payoutRouter };