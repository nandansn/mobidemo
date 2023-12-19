const express = require("express");
const amBankRouter = express.Router();


amBankRouter.post('/GetAccountEnquiry/:srcRefNo', function (req, res) {

    const sourceRefID = req.params.srcRefNo;

    res.status(200).json({
        "creditorAccountName": "Mobi UAT Test Simulator",
        "creditorAccountType": "DFLT",
        "lookUpReference": sourceRefID,
        "creditorAccountNo": "318481470",
        "receiverBIC" : "BIMBMYKL"
        })
    

});

amBankRouter.post('/PostCreditTransfer/:srcRefNo', function (req, res) {

    const sourceRefID = req.params.srcRefNo;

    res.status(201).json({
        "debitorBalance": "19999999.87",
        "debitorCurrency": "MYR",
        "debitorAccountName": "Mobi UAT testing account name",
        "debitorIslamInd": "C",
        "creditorAccountName": "Mobi UAT testing creditor name",
        "transactionStatus": "ACSP"
        })
    
})

module.exports = { amBankRouter };