const express = require("express");
const acctEnquiry = express.Router();


acctEnquiry.post('/enquiry', function (req, res) {

    const namesObject = {
        "1": "Muhammad Khairul Azraei Muhammad Safri",
        "2": "Mohamad Aminudin Bin Mohamad Salleh",
        "3": "Reynolds Mosijil",
        "4": "Miza Len Soluku",
        "5": "Azizan Bin Kawi",
        "6": "Md Rahmat Bin Daud",
        "7": "Chong York Min",
        "8": "vemal venugopal naidu",
        "9": "Mohammad Alfie Dilaney Bin Mohd Aldilah",
        "10": "Mohd Arif Bin Abdul Hamid",
        "11": "Mohammad Amirul Adha Md Yusuf",
        "12": "Nur Hazirah Binti Ya Gazali",
        "13": "MOHD NASRUL BIN MOHAMED NOR",
        "14": "NURULASMIRA BINTI ABDUL RASHID",
        "15": "Ahmad Amirun Asyraf Bin Shari",
        "16": "Ammar Fitri Bin Kamarul Zaman",
        "17": "Muhammad Haniff Sahron",
        "18": "Low Thuan Himm",
        "19": "KHAIRUL ANWAR AZHAR BIN JAAFAR",
        "20": "MUHAMMAD ARIF BIN JUFRI",
        "21": "Fatimah Solehah Binti Abd Hadi",
        "22": "Dzulhafiz Menjeni",
        "23": "Andy Affandy Bin Amat",
        "24": "Ammar Qaiyim Sulaiman",
        "25": "Zamrei Bin Mohd Noor",
        "26": "Julyatina Binti Jantan",
        "27": "Tan Wee Kiong",
        "28": "Mohamad Ridzuan Shah Bin Ahmad Tajuddin",
        "29": "Muhammad Ridzuan Bin Mazlan",
        "30": "Mohamad Syahmim Bin Rosli",
        "31": "Che Rostami Bin Saad",
        "32": "Abdul Rahman Bin Anuar",
        "33": "Mohd Amir Ridhauddin Bin Mohd Yusof",
        "34": "Shahdan bin hasan",
        "35": "Jefri Justin Raj Bin Selvarajo",
        "36": "Noramin Mohd Johari",
        "37": "Zulfaqqar Naim Bin Rosli",
        "38": "Mohd Syawal Ghazali",
        "39": "Amandeep Singh",
        "40": "Kamarul zaman bin mohd kamal ponusamy",
        "41": "mohd farid mislan",
        "42": "Helmy Melajim",
        "43": "Ravi Kannan",
        "44": "Yusran Bin Abdullah",
        "45": "MUHAMMAD AIMAN BIN ZAKARIA",
        "46": "Davincy Saha Bin Mohd Sanusi",
        "47": "Syamsul Bin Mamat",
        "48": "Ahmad Syafiq Abd Rahim",
        "49": "Effendy Jaman",
        "50": "RUSHDAN BIN"
    }


    const { enquiryType, merchantId, employeeId, thirdPartyAccountNo, thirdPartyBankBICCode } = req.query;

    // Do something with the query parameters
    console.log('Enquiry Type:', enquiryType);
    console.log('Merchant ID:', merchantId);
    console.log('Employee ID:', employeeId);
    console.log('Third Party Account No:', thirdPartyAccountNo);
    console.log('Third Party Bank BIC Code:', thirdPartyBankBICCode);

    custName = namesObject[thirdPartyAccountNo];

    if (thirdPartyAccountNo == "") {
        res.status(201).json({
            "Status": [
                "201"
            ],
            "Response": [
                {
                    "merchant_name": [
                        "MOBI"
                    ],
                    "bank_response": [
                        {
                            "Success": false,
                            "Result": {
                            }
                        }
                    ]
                }
            ],
            "Date": [
                "Tue Aug 27 18:46:21 MYT 2024"
            ]
        })
    }

    if (thirdPartyAccountNo == "-1") {
        res.status(201).json({
            "Status": [
                "201"
            ],
            "Response": [],
            "Date": [
                "Tue Aug 27 18:46:21 MYT 2024"
            ]
        })
    }

    if (thirdPartyAccountNo == "-2") {
        res.status(500).json({
            "Status": [
                "500"
            ],
            "Response": [],
            "Date": [
                "Tue Aug 27 18:46:21 MYT 2024"
            ]
        })
    } else {


        // Send a response
        res.status(201).json({
            "Status": [
                "201"
            ],
            "Response": [
                {
                    "merchant_name": [
                        "MOBI"
                    ],
                    "bank_response": [
                        {
                            "Success": true,
                            "Result": {
                                "OrgnThirdPartyBankBICCode": "ARBKMYKL",
                                "OrgnThirdPartyAccountNo": "1",
                                "CreditorName": custName
                            }
                        }
                    ]
                }
            ],
            "Date": [
                "Tue Aug 27 18:46:21 MYT 2024"
            ]
        })
    }



});

module.exports = { acctEnquiry };