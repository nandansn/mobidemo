const express = require("express");
const amBankRouter = express.Router();


amBankRouter.get('/GetAccountEnquiry/:srcRefNo', function (req, res) {

    const sourceRefID = req.params.srcRefNo;

    res.status(200).json({
        "creditorAccountName": "Mobi UAT Test Simulator",
        "creditorAccountType": "DFLT",
        "lookUpReference": sourceRefID,
        "creditorAccountNo": "318481470",
        "receiverBIC" : "BIMBMYKL"
        })
    

});

module.exports = { amBankRouter };