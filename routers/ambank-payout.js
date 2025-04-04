const express = require("express");
const bodyParser = require('body-parser');
const amBankRouter = express.Router();


amBankRouter.use(bodyParser.urlencoded({ extended: true }));
amBankRouter.post('/oauth/v2.0/token', function (req, res) {
    console.log('token endpoint hit')
    console.log(req.body)
    const { grant_type, scope } = req.query;
    const contentType = req.headers['content-type'];
    const authorization = req.headers['authorization'];
    console.log('contentType', contentType)


    console.log(grant_type, scope, authorization, contentType)

    if (
        contentType === 'application/x-www-form-urlencoded' &&
        authorization &&
        grant_type === 'client_credentials' &&
        scope === 'resource.READ'
    ) {
        if (authorization === 'Mobi196') {
            res.status(200).json({
                "access_token": "83TdIlTMFUax6UQxt4hj1Odrl9hcwZCyokvNbz2Px6T93LceX8QNOA",
                "token_type": "Bearer",
                "expires_in": 3600,
                "scope": "resource.WRITEresource.READ"
            });
        } else {
            res.status(401).json({
                "ResponseCode": "000003",
                "ResponseMessage": "Unauthorized, Invalid client_id/client_secret/grant_type/token/IP_Address"
            });
        }
    } else {
        res.status(400).json({
            "error": "invalid_request",
            "error_description": "Invalid headers, grant_type, or scope"
        });
    }
});





amBankRouter.post('/PaymentAPI/v3.0/GetAccountEnquiry/:srcRefNo', function (req, res) {

    const sourceRefID = req.params.srcRefNo;

    if (sourceRefID === '2025') {
        res.status(200).json({
            "creditorAccountName": "MOBI ASIA SDN. BHD.",
            "creditorAccountType": "CACC",
            "lookUpReference": "20250327ARBKMYKL510B18192155"
        });
    }

    else {
        res.status(401).json({
            "ResponseCode": "000007",
            "ResponseMessage": "Signature Mismatch"
        });
    }


});

amBankRouter.post('/PaymentAPI/v3.0/PostCreditTransfer/:srcRefNo', function (req, res) {

    const sourceRefID = req.params.srcRefNo;
    const { amount, paymentReference, paymentDescription, lookUpReference } = req.body;

    if (amount === '99999') {
        res.status(200).json({
            "debitorBalance": "13843.07",
            "debitorCurrency": "MYR",
            "debitorAccountName": "MOBI ASIA SDN. BHD. FKA MOBIVERSA SDN. BHD.",
            "debitorIslamInd": "C",
            "creditorAccountName": "mobi",
            "transactionStatus": "RJCT"
        });
    } else if (Number(amount) > 10 && Number(amount) <= 1000) {
        res.status(200).json({
            "debitorBalance": "13843.07",
            "debitorCurrency": "MYR",
            "debitorAccountName": "MOBI ASIA SDN. BHD. FKA MOBIVERSA SDN. BHD.",
            "debitorIslamInd": "C",
            "creditorAccountName": "mobi",
            "transactionStatus": "ACSP"
        });
    } else if (Number(amount) > 1000) {
        res.status(200).json({
            "debitorBalance": "13843.07",
            "debitorCurrency": "MYR",
            "debitorAccountName": "MOBI ASIA SDN. BHD. FKA MOBIVERSA SDN. BHD.",
            "debitorIslamInd": "C",
            "creditorAccountName": "mobi",
            "transactionStatus": "ACTC"
        });
    }
    else {
        res.status(401).json({
            "ResponseCode": "000008",
            "ResponseMessage": "Invalid timestamp"
        });
    }

})

module.exports = { amBankRouter };