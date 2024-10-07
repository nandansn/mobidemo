const express = require("express");
const curlecEwalletRouter = express.Router();

curlecEwalletRouter.post('/success/10', function (req, res) {
    console.log('ewallet: success, code: 10')
    res.status(200).json(
        {
            "Status": [
              "201"
            ],
            "Response": [
              {
                "duitnow_payout_batch_date": [
                  "Sat Oct 05 00:13:03 MYT 2024"
                ],
                "duitnow_payout_batch_status_code": [
                  "10"
                ],
                "duitnow_payout_batch": [
                  "BULKPAY_05102024_001251051_990"
                ],
                "duitnow_payout_batch_status": [
                  "PROCESSED_ALL_SUCCESSFUL"
                ]
              }
            ],
            "Date": [
              "Sat Oct 05 00:13:03 MYT 2024"
            ]
          }
    )
  });

curlecEwalletRouter.post('/success/0', function (req, res) {
    console.log('ewallet: success, code: 0')
    res.status(200).json(
        {
            "Status": [
              "201"
            ],
            "Response": [
              {
                "duitnow_payout_batch_date": [
                  "Sat Oct 05 00:13:03 MYT 2024"
                ],
                "duitnow_payout_batch_status_code": [
                  "0"
                ],
                "duitnow_payout_batch": [
                  "BULKPAY_05102024_001251051_990"
                ],
                "duitnow_payout_batch_status": [
                  "PROCESSED_ALL_SUCCESSFUL"
                ]
              }
            ],
            "Date": [
              "Sat Oct 05 00:13:03 MYT 2024"
            ]
          }
    )
  });

curlecEwalletRouter.post('/failure/0', function (req, res) {
    console.log('ewallet: failure, code: 0')
    res.status(200).json(
        {
            "Status": [
              "201"
            ],
            "Response": [
              {
                "duitnow_payout_batch_date": [
                  "Sat Oct 05 14:04:32 MYT 2024"
                ],
                "duitnow_payout_batch_status_code": [
                  "5"
                ],
                "duitnow_payout_batch": [
                  "BULKPAY_05102024_140432264_bf5"
                ],
                "duitnow_payout_batch_status": [
                  "PROCESSED_ALL_FAILED"
                ]
              }
            ],
            "Date": [
              "Sat Oct 05 14:04:32 MYT 2024"
            ]
          }
    )
  });

module.exports = {
    curlecEwalletRouter
  }