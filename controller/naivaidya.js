const naivadya = require('../models/naivaidyaModel');
const bcrypt = require("bcryptjs");
const apiResponse = require('../helpers/apiResponse');
const naivaidyaModel = require('../models/naivaidyaModel');
const twilio = require('twilio');
const fs = require('fs');
const handlebars = require('handlebars');
const puppeteer = require('puppeteer');
const axios = require('axios');              //9466a27cc595f65b0d2e90e0c58e36cb
const cron = require('node-cron');          //9466a27cc595f65b0d2e90e0c58e36cb  -api key ,  secreate key-c9634221d8d381b1d0a4afe573b5a7c3
require('dotenv').config();

const mailjet = require('node-mailjet').apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

class naivadyaController {

    async createNaivadya(req, res) {
        try {
            const currentDate = new Date();


            const currentDayOfWeek = currentDate.getDay();
            console.log(currentDayOfWeek)

            if (req.body) {
                const existnavidya = await naivadya.findOne({ status: "active", mobile: req.body.mobile })

                if (existnavidya) {
                    return apiResponse.alreadyExist(res, "user already exist", "", "", "");
                }

                const naivadyaId = String(req.body.name).trim().toUpperCase().replace(/ /gi, "").slice(0, 3) + "_" + String(req.body.mobile).trim();
                const naivadyas = new naivadya({
                    naivadyaId: naivadyaId,
                    name: req.body.name,
                    mobile: req.body.mobile,
                    naivadyaType: req.body.naivadyaType,
                    time: req.body.time,
                    dayName: req.body.dayName,
                    dayPriority: req.body.dayPriority
                })
                const savedNaivadya = await naivadyas.save();
                if (savedNaivadya) {
                    return apiResponse.successResponse(res, "Naivadya Created Successfully", savedNaivadya, "", "");
                } else {
                    return apiResponse.successNoContentResponse(res, "Data Not Found", "", "", "");
                }
            } else {
                return apiResponse.bodyNotExist(res, "Body Empty", data = null, "", "")
            }
        } catch (error) {
            return apiResponse.errorResponse(res, error.message, "", "", error);
        }
    }

    async updateNaivadya(req, res) {
        try {


            if (req.body) {


                const savedNaivadya = await naivaidyaModel.findOneAndUpdate({ naivadyaId: req.body.naivadyaId },
                    {
                        $set: {
                            name: String(req.body.name).trim(),
                            mobail: parseInt(req.body.mobail),
                            naivadyaType: req.body.naivadyaType,
                            time: String(req.body.time).trim(),
                            dayPriority:String(req.body.dayPriority).trim()
                        }
                    }, { new: true });
                if (savedNaivadya) {
                    return apiResponse.successResponse(res, "Naivadya Created Successfully", savedNaivadya, "", "");
                } else {
                    return apiResponse.successNoContentResponse(res, "Data Not Found", "", "", "");
                }
            } else {
                return apiResponse.bodyNotExist(res, "Body Empty", data = null, "", "")
            }
        } catch (error) {
            return apiResponse.errorResponse(res, error.message, "", "", error);
        }
    }

    async getSchedule(req, res) {
        try {
            let { year, month } = req.body;
            year = parseInt(year) || new Date().getFullYear();
            month = parseInt(month)
            if(!month&&month!=0){
                month= new Date().getMonth();
            }
            console.log( month);
            console.log(typeof month);

            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const firstDayOfWeek = new Date(year, month, 1).getDay();
            console.log(firstDayOfWeek, "first day");
            console.log(daysInMonth, "days in month");

            const weekDay = { 0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday" };

            let schedule = [];
            const today = new Date();

            for (let i = 0; i < daysInMonth; i++) {
                const currentDayOfWeek = (firstDayOfWeek + i) % 7;
                const dayName = weekDay[currentDayOfWeek];
                const dayPriority = Math.floor(i / 7) + 1;

                const data = await naivaidyaModel.find({ dayName, dayPriority }).select({ name: 1, mobail: 1, time: 1, _id: 0 });

                const scheduleDate = new Date(year, month, i + 1);
                const reminderDate = new Date(scheduleDate);
                reminderDate.setDate(scheduleDate.getDate() - 2);

                // if (today.toDateString() === reminderDate.toDateString()) {
                //     for (let user of data) {
                //         const message = `\nश्री स्वामी समर्थ\nदोन दिवसा नंतर ${dayName} ${scheduleDate.toDateString()} ${data.time} आपले आरती आणि नैवद्य चे क्रमांक आहे कृपया करून काही अडचण असलेस केंद्राशी संपर्क साधा \n धन्यवाद !!\nश्री स्वामी समर्थ केंद्र इचलकरंजी ,`;
                //         console.log(user)
                //         await sendSMS(user.mobile, message);
                //     }
                // }

                schedule.push({
                    day: i + 1,
                    dayname: dayName,
                    data
                });
            }



            return apiResponse.successResponse(res, "Schedule Generated Successfully", schedule, "", "");
        } catch (error) {
            return apiResponse.errorResponse(res, error.message, "", "", error);
        }
    }

    async getAllSevekari(req, res) {
        try {


            if (req.body) {
                const AllSevekari = await naivaidyaModel.find({ status: "active" })



                if (AllSevekari) {
                    return apiResponse.successResponse(res, "getting All Sevekari Successfully", AllSevekari, "", "");
                } else {
                    return apiResponse.successNoContentResponse(res, "Data Not Found", "", "", "");
                }
            } else {
                return apiResponse.bodyNotExist(res, "Body Empty", data = null, "", "")
            }
        } catch (error) {
            return apiResponse.errorResponse(res, error.message, "", "", error);
        }
    }

    async checkUrlResponsiveness(req, res) {
        try {
            // Array of URLs with their method type (no body for POST)
            const urls = [
                { url: 'http://115.124.97.182:8085/RTSUAT/citizenRegistration', method: 'POST' },
                { url: 'http://115.124.97.182:8085/RTSUAT/saveApplication1', method: 'POST' }, // POST without sending any body
                { url: 'http://115.124.97.182:8085/RTSUAT/getAllWard', method: 'GET' },
                { url: 'http://115.124.97.182:8085/RTSUAT/getStatusByToken/1234', method: 'GET' },
                { url: 'http://115.124.97.182:8085/RTSUAT/getPaymentLink?appTokenNo=1234', method: 'GET' },
                { url: 'http://115.124.97.182:8085/RTSUAT/getPaymentStatus?appTokenNo=1234', method: 'GET' },
                { url: 'http://115.124.97.182:8085/RTSUAT/getPaymentReceipt?appTokenNo=1234', method: 'GET' },
                { url: 'http://115.124.97.182:8085/RTSUAT/getCertificate?appTokenNo=1234', method: 'GET' },
                { url: 'http://115.124.97.182:8085/RTSUAT/viewUploadedImage/1234', method: 'GET' },
                { url: 'http://115.124.97.182:8085/RTSUAT/viewOfficierSign/123/1234', method: 'GET' },
              
                // Add more URLs as needed with 'method'
            ];
            // const { email } = req.body;

            // Function to ping URL and check responsiveness based on method type
            const pingUrl = async (urlObj) => {
                try {
                    if (urlObj.method === 'GET') {
                        // Handle GET method
                        await axios.get(urlObj.url);
                    } else if (urlObj.method === 'POST') {
                        // Handle POST method without sending any body to avoid repetitive data
                        await axios.post(urlObj.url);
                    }
                    return true; // URL is responsive
                } catch (error) {
                    return false; // URL is not responsive
                }
            };

            // Loop through the array of URLs and check each one
            const checkAllUrls = async () => {
                for (const urlObj of urls) {
                    const isResponsive = await pingUrl(urlObj);

                    if (!isResponsive) {
                        console.log(`URL ${urlObj.url} is not responsive. Checking again later...`);

                        // Schedule cron job to check every minute if the URL becomes responsive
                        const job = cron.schedule('* * * * *', async () => {
                            const urlResponsive = await pingUrl(urlObj);
                            if (urlResponsive) {
                                console.log(`URL ${urlObj.url} is now responsive!`);

                                // Send email using Mailjet
                                await mailjet.post("send", { version: 'v3.1' }).request({
                                    Messages: [{
                                        From: { Email: process.env.MAILJET_SENDER_EMAIL, Name: "PMC CARE API" },
                                        To: [{ Email: process.env.RECIPIENT_EMAIL, Name: "Ashish" }],
                                        Subject: "URL is Now Responsive",
                                        TextPart: `The URL ${urlObj.url} is now responsive.`,
                                        HTMLPart: `<p>The URL <a href="${urlObj.url}">${urlObj.url}</a> is now responsive.</p>`
                                    }]
                                });

                                // Stop the cron job after URL becomes responsive
                                job.stop();
                            }
                        });

                        return apiResponse.successResponse(res, `Monitoring started for URL: ${urlObj.url}`, "", "", "");
                    } else {
                        console.log(`URL ${urlObj.url} is already responsive.`);
                    }
                }
                return apiResponse.successResponse(res, "All URLs are already responsive.", "", "", "");
            };

            // Check all URLs initially
            await checkAllUrls();

        } catch (error) {
            return apiResponse.errorResponse(res, error.message, "", "", error);
        }
    }
}





module.exports = naivadyaController;


