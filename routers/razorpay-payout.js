const express = require("express");
const razorpayRouter = express.Router();


razorpayRouter.post('/payee', function (req, res) {


  let { bankName, subMID, amount, customerName, payoutid } = req.body;

  console.log(bankName);

  res.status(200).json(
    [
      {
        "payee_status": "ACTIVE",
        "payee_name": "testPayee10",
        "bank_accounts": [
          {
            "bank_code": "TEST0021",
            "account_type": "CURRENT_ACCOUNT",
            "account_number": "1324",
            "account_id": 5434213,
            "is_active": true,
            "account_holder_name": "test two",
            "passport_country": null,
            "id_type": "NRIC",
            "id_value": "1234",
            "payment_method": 2
          }
        ]
      }
    ]
  )




});

razorpayRouter.post('/payout', function (req, res) {


  let { bankName, subMID, amount, customerName, payoutid } = req.body;

  console.log(bankName);

  res.status(200).json(
    [
      {
        "duitnow_payout_batch": "BULKPAY_08222223072021006",
        "duitnow_payout_batch_status": "SUCCESSFULLY_COMPLETE",
        "duitnow_payout_batch_status_code": "0",
        "duitnow_payout_batch_date": "Thu Dec 23 16:00:00 MYT 2021"
      }
    ]
  )




});


razorpayRouter.post('/payoutInProgress', function (req, res) {


  let { bankName, subMID, amount, customerName, payoutid } = req.body;

  console.log(bankName);

  res.status(201).json(
    { "Status": ["201"], "Response": [{ "batch_collection_status": ["TRANSFER_IN_PROGRESS"], "batch_id": ["BULKPAY_12345620022024001"], "batch_collection_date": ["2024-02-20 00:00:00.0"], "batch_collection_status_code": ["11"], "list": [[{ "payout_details": [null], "customer_uid": [null], "response_batch": [null], "payout_status": ["TRANSFER_IN_PROGRESS"], "payout_date": ["2024-02-20 00:00:00.0"], "payout_status_code": ["10"], "response_date": [null], "payee_name": ["WAN MOHAMAD TAJERI BIN WAN IBRAHIM-PHBMMYKL-3111020165178"], "recipient_reference": ["WAN MOHAMAD TAJERI BIN WAN IBRAHIM-PHBMMYKL-3111020165178"], "payout_amount": ["10.00"], "internal_reference": [null] }]] }], "Total": [1], "Date": ["Mon Feb 19 23:51:18 MYT 2024"] }
  )

});


module.exports = { razorpayRouter };