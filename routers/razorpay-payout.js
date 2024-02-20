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

  res.status(200).json(
    { 'Status': ['201'], 'Response': [{ 'duitnow_payout_batch_date': ['Tue Feb 20 00:00:00 MYT 2024'], 'duitnow_payout_batch_status_code': ['11'], 'duitnow_payout_batch': ['BULKPAY_12345620022024008'], 'duitnow_payout_batch_status': ['TRANSFER_IN_PROGRESS'] }], 'Date': ['Mon Feb 19 23:59:44 MYT 2024'] }
  )

});


razorpayRouter.post('/payoutSuccess', function (req, res) {


  let { bankName, subMID, amount, customerName, payoutid } = req.body;

  console.log(bankName);

  res.status(200).json(
    { 'Status': ['201'], 'Response': [{ 'duitnow_payout_batch_date': ['Tue Feb 20 00:00:00 MYT 2024'], 'duitnow_payout_batch_status_code': ['10'], 'duitnow_payout_batch': ['BULKPAY_12345620022024008'], 'duitnow_payout_batch_status': ['PROCESSED_ALL_SUCCESSFUL'] }], 'Date': ['Mon Feb 19 23:59:44 MYT 2024'] }
  )

});

razorpayRouter.post('/payoutFailed', function (req, res) {


  let { bankName, subMID, amount, customerName, payoutid } = req.body;

  console.log(bankName);

  res.status(200).json(
    { 'Status': ['201'], 'Response': [{ 'duitnow_payout_batch_date': ['Tue Feb 20 00:00:00 MYT 2024'], 'duitnow_payout_batch_status_code': ['9'], 'duitnow_payout_batch': ['BULKPAY_12345620022024008'], 'duitnow_payout_batch_status': ['REJECTED'] }], 'Date': ['Mon Feb 19 23:59:44 MYT 2024'] }
  )

});

razorpayRouter.post('/payoutStatus/Success', function (req, res) {


  let { bankName, subMID, amount, customerName, payoutid } = req.body;

  console.log(bankName);

  res.status(200).json(
    {
      "Status": [
        "201"
      ],
      "Response": [
        {
          "batch_collection_status": [
            "PROCESSED_ALL_SUCCESSFUL"
          ],
          "batch_id": [
            "BULKPAY_08674926122023002"
          ],
          "batch_collection_date": [
            "2023-12-26 00:00:00.0"
          ],
          "batch_collection_status_code": [
            "10"
          ],
          "list": [
            [
              {
                "payout_details": [
                  "OCBC Test 2"
                ],
                "customer_uid": [
                  null
                ],
                "response_batch": [
                  null
                ],
                "payout_status": [
                  "SUCCESSFULLY_COMPLETE"
                ],
                "payout_date": [
                  "2023-12-26 00:00:00.0"
                ],
                "payout_status_code": [
                  "0"
                ],
                "response_date": [
                  null
                ],
                "payee_name": [
                  "Bradley"
                ],
                "recipient_reference": [
                  "Test Curlec"
                ],
                "payout_amount": [
                  "1.00"
                ],
                "internal_reference": [
                  null
                ]
              }
            ]
          ]
        }
      ],
      "Total": [
        1
      ],
      "Date": [
        "Mon Feb 19 16:16:13 MYT 2024"
      ]
    }
  )

});

razorpayRouter.post('/payoutStatus/Inprogress', function (req, res) {


  let { bankName, subMID, amount, customerName, payoutid } = req.body;

  console.log(bankName);

  res.status(200).json(
    {
      "Status": [
        "201"
      ],
      "Response": [
        {
          "batch_collection_status": [
            "TRANSFER_IN_PROGRESS"
          ],
          "batch_id": [
            "BULKPAY_08674926122023002"
          ],
          "batch_collection_date": [
            "2023-12-26 00:00:00.0"
          ],
          "batch_collection_status_code": [
            "11"
          ],
          "list": [
            [
              {
                "payout_details": [
                  "OCBC Test 2"
                ],
                "customer_uid": [
                  null
                ],
                "response_batch": [
                  null
                ],
                "payout_status": [
                  "TRANSFER_IN_PROGRESS"
                ],
                "payout_date": [
                  "2023-12-26 00:00:00.0"
                ],
                "payout_status_code": [
                  "10"
                ],
                "response_date": [
                  null
                ],
                "payee_name": [
                  "Bradley"
                ],
                "recipient_reference": [
                  "Test Curlec"
                ],
                "payout_amount": [
                  "1.00"
                ],
                "internal_reference": [
                  null
                ]
              }
            ]
          ]
        }
      ],
      "Total": [
        1
      ],
      "Date": [
        "Mon Feb 19 16:16:13 MYT 2024"
      ]
    }
  )

});




module.exports = { razorpayRouter };