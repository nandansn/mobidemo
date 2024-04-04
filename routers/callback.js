const express = require("express");
const callBackRouter = express.Router();

callBackRouter.post('/callback/payment/result', function (req, res) {

    console.log(req.body);

    let {fpx_sellerOrderNo, fpx_txnCurrency, fpx_txnAmount } = req.body;

    res.status(201).json({
        "responseCode": "0000",
        "responseMessage": "SUCCESS",
        "responseDescription": "Call Back Received Success",
        "payment_data" : {
            "fpx_sellerOrderNo" : fpx_sellerOrderNo,
            "fpx_txnCurrency": fpx_txnCurrency,
            "fpx_txnAmount": fpx_txnAmount
        }

    })
    

});

module.exports = { callBackRouter };