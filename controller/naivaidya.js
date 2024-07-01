const naivadya = require('../models/naivaidyaModel');
const bcrypt = require("bcryptjs");
const apiResponse = require('../helpers/apiResponse');
const naivaidyaModel = require('../models/naivaidyaModel');
const twilio = require('twilio');
const fs = require('fs');
const handlebars = require('handlebars');
const puppeteer = require('puppeteer');

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
            month = parseInt(month) || new Date().getMonth();
            console.log(month);

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


}


module.exports = naivadyaController;


