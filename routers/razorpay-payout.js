const express = require("express");
const razorpayRouter = express.Router();





// razorpayRouter.post('/payee', function (req, res) {


//   let { bankName, subMID, amount, customerName, payoutid } = req.body;

//   console.log(bankName);

//   res.status(200).json(
//     [
//       {
//         "payee_status": "ACTIVE",
//         "payee_name": "testPayee10",
//         "bank_accounts": [
//           {
//             "bank_code": "TEST0021",
//             "account_type": "CURRENT_ACCOUNT",
//             "account_number": "1324",
//             "account_id": 5434213,
//             "is_active": true,
//             "account_holder_name": "test two",
//             "passport_country": null,
//             "id_type": "NRIC",
//             "id_value": "1234",
//             "payment_method": 2
//           }
//         ]
//       }
//     ]
//   )




// });




// razorpayRouter.post('/payoutInProgress', function (req, res) {


//   let { bankName, subMID, amount, customerName, payoutid } = req.body;

//   console.log(bankName);

//   res.status(200).json(
//     { "Status": ["201"], "Response": [{ "instant_payout_batch_status": ["PROCESSED_ALL_COMPLETED"], "instant_payout_batch_status_code": ["0"], "instant_payout_batch_date": ["Wed Feb 21 15:52:01 MYT 2024"], "instant_payout_batch": ["BULKPAY_12345621022024009"] }], "Date": ["Wed Feb 21 15:52:16 MYT 2024"] }
//   )

// });


razorpayRouter.post('/payout', function (req, res) {


  let { payoutList, subMID, amount, customerName, payoutid } = req.query;

  console.log(payoutList);



  if (payoutList.includes('RHB')) {
    res.status(200).json({ "Status": ["201"], "Response": [{ "ibg_payout_batch_status_code": ["2"], "ibg_payout_batch_status": ["PROCESSED_ALL_SUCCESSFUL"], "ibg_payout_batch": ["BULKPAY_12345626022024083"], "ibg_payout_batch_date": ["Mon Feb 26 14:38:02 MYT 2024"] }], "Date": ["Mon Feb 26 14:38:10 MYT 2024"] })
  } else {

    res.status(200).json(
      { "Status": ["201"], "Response": [{ "instant_payout_batch_status": ["PROCESSED_ALL_SUCCESSFUL"], "instant_payout_batch_status_code": ["2"], "instant_payout_batch_date": ["Wed Feb 21 15:08:35 MYT 2024"], "instant_payout_batch": ["BULKPAY_12345621022024007"] }], "Date": ["Wed Feb 21 15:08:42 MYT 2024"] }
    )

  }

});

razorpayRouter.post('/payoutFailed', function (req, res) {


  let { bankName, subMID, amount, customerName, payoutid } = req.body;

  console.log(bankName);

  res.status(200).json(
    { 'Status': ['201'], 'Response': [{ 'duitnow_payout_batch_date': ['Tue Feb 20 00:00:00 MYT 2024'], 'duitnow_payout_batch_status_code': ['9'], 'duitnow_payout_batch': ['BULKPAY_12345620022024008'], 'duitnow_payout_batch_status': ['REJECTED'] }], 'Date': ['Mon Feb 19 23:59:44 MYT 2024'] }
  )

});

razorpayRouter.post('/payee', function (req, res) {


  let message = req.query.message;
  let code = req.query.code;

  if (code === '409') {
    if (message.includes('Invalid bank code')) {
      res.status(200).json(
        { "Status": ["409"], "Message": ["Invalid bank code"], "Date": ["Thu Feb 22 10:41:07 MYT 2024"] }
      )
    }
  } else {
    res.status(200).json({ "Status": ["201"], "Message": ["Success"], "Date": ["Thu Feb 22 10:41:07 MYT 2024"] })
  }



});

razorpayRouter.post('/status/success', function (req, res) {
  res.status(200).json({ "Status": ["201"], "Response": [{ "batch_collection_status": ["PROCESSED_ALL_SUCCESSFUL"], "batch_id": ["BULKPAY_12345621022024008"], "batch_collection_date": ["2024-02-21 15:38:45.0"], "batch_collection_status_code": ["10"], "list": [[{ "payout_details": ["payout from MOBI FI"], "customer_uid": [null], "response_batch": [null], "payout_status": ["SUCCESSFULLY_COMPLETE"], "payout_date": ["2024-02-21 15:38:45.0"], "payout_status_code": ["0"], "response_date": [null], "payee_name": ["Mobi Asia Sdn Bhd-CIBBMYKL-8007810373"], "recipient_reference": ["2102202417HHD421637"], "payout_amount": ["21.21"], "internal_reference": [null] }]] }], "Total": [1], "Date": ["Wed Feb 21 15:38:54 MYT 2024"] })

});

razorpayRouter.post('/status/failed', function (req, res) {
//   res.status(200).json({ "Status": ["201"], "Response": [{ "batch_collection_status": ["PROCESSED_ALL_SUCCESSFUL"], "batch_id": ["BULKPAY_12345621022024008"], "batch_collection_date": ["2024-02-21 15:38:45.0"], "batch_collection_status_code": ["7"], "list": [[{ "payout_details": ["payout from MOBI FI"], "customer_uid": [null], "response_batch": [null], "payout_status": ["SUCCESSFULLY_COMPLETE"], "payout_date": ["2024-02-21 15:38:45.0"], "payout_status_code": ["5"], "response_date": [null], "payee_name": ["Mobi Asia Sdn Bhd-CIBBMYKL-8007810373"], "recipient_reference": ["2102202417HHD421637"], "payout_amount": ["21.21"], "internal_reference": [null] }]] }], "Total": [1], "Date": ["Wed Feb 21 15:38:54 MYT 2024"] })

// });

res.status(200).json(
  {"Status":["409"],"Message":["Instant Transfer : ERROR (could not extract ResultSet; nested exception is org.hibernate.exception.GenericJDBCException: could not extract ResultSet)"],"Date":["Mon Mar 18 21:25:31 MYT 2024"]}
)

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
            "5"
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

razorpayRouter.post('/payoutStatus/Failed', function (req, res) {


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
            "PROCESSED_ALL_COMPLETED"
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

razorpayRouter.post('/balance', function (req, res) {


  setTimeout(function () {
    let { amount } = req.query;

    amount = amount ? amount : "750000.00"

    res.status(200).json(
      {
        "Status": [
          "201"
        ],
        "Response": [
          {
            "merchant_name": [
              "MOBI"
            ],
            "merchant_balance": [
              amount
            ]
          }
        ],
        "Date": [
          "Mon Feb 19 18:54:49 MYT 2024"
        ]
      }

    )
  }, 12000)


});


module.exports = { razorpayRouter };