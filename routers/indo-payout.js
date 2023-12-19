const express = require("express");
const payoutRouter = express.Router();




payoutRouter.post('indo/payout/callback', function (req, res) {

    res.status(201).json({
        data:{

            transaction_id:"B1A7602031C994D2E9901782447416529307E4362E900382",
            external_id:"hjsaletest299",
            status:""

        },
        status: {
            code:"0001",
            message:"Success",
            success:""

        }
    })
    

});

module.exports = { payoutRouter };