// const axios = require("axios");

// class SMSGateway {
//   async sendOTPSMS(mobile, otp, lang) {
//     try {
//       let smsUrl
//       if (lang == 'mr') {
//         smsUrl = `http://api.mairaads.com/index.php/sms/send/SMACES/` + mobile + `/श्री फॅमिली गाईड साठी तुमचा ओटीपी ` + otp + ` आहे. ओटीपी कोणाशीही शेअर करू नका. धन्यवाद, SIMACES LEARNING LLP/UNI?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007040676567953617`
//       }
//       if (lang == 'hn') {
//         smsUrl = `http://api.mairaads.com/index.php/sms/send/SMACES/` + mobile + `/श्री फैमिली गाइड के लिए आपका ओटीपी ` + otp + ` है। ओटीपी किसी के साथ साझा न करें। शुक्रिया! SIMACES LEARNING LLP/UNI?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007554170538464301`
//       }
//       if (lang == 'en') {
//         smsUrl = `http://api.mairaads.com/index.php/sms/send/SMACES/` + mobile + `/Your OTP for Sri Family Guide is` + otp + `. Do not share OTP with anyone. Warm Regards, SIMACES LEARNING LLP/TXT?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007228012623700454`
//       }

//       let smsResponse = await axios({
//         method: 'get',
//         url: smsUrl,
//       })
//       console.log('SMS sent successfully to', smsResponse.data);
//       return smsResponse.data;
//     } catch (error) {
//       console.log('SMS failed error--', error.response);
//       console.log('SMS failed error--', error.message);
//       return error;
//     }
//   }

//   async EventSMS(mobile, lang, date) {
//     try {
//       let smsUrl
//       if (lang == 'mr') {
//         smsUrl = `http://api.mairaads.com/index.php/sms/send/SMACES/` + mobile + `/तुम्ही मुंबईत पादुका दर्शनाची संधी कार्यक्रमासाठी यशस्वीरित्या नोंदणी केली आहे. कार्यक्रमाची तारीख: ` + date + ` 2024 धन्यवाद, SIMACES LEARNING LLP/UNI?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007814744572549577`
//       }
//       if (lang == 'hn') {
//         smsUrl = `http://api.mairaads.com/index.php/sms/send/SMACES/` + mobile + `/आपने मुंबई में पादुका दर्शन का अवसर। कार्यक्रम के लिए दि. ` + date + ` 2024 पर सफलतापूर्वक पंजीकरण कर लिया है। शुक्रिया! SIMACES LEARNING LLP/UNI?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007022895574219231`
//       }
//       if (lang == 'en') {
//         smsUrl = `http://api.mairaads.com/index.php/sms/send/SMACES/` + mobile + `/You have successfully registered for the Opportunity of Paduka Darshan in Mumbai event on ` + date + ` 2024 Warm Regards, SIMACES LEARNING LLP/TXT?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007164709186155743`
//       }

//       let smsResponse = await axios({
//         method: 'get',
//         url: smsUrl,
//       })
//       console.log('SMS sent successfully to', smsResponse.data);
//       return smsResponse.data;

//     } catch (error) {
//       console.log('SMS failed error--', error);
//       return error;
//     }
//   }

//   async CourseSMS(mobile, lang, name) {
//     try {
//       let smsUrl
//       if (lang == 'mr') {
//         smsUrl = `http://api.mairaads.com/index.php/sms/send/SMACES/` + mobile + `/अभिनंदन ` + name + `! तुमची श्री फॅमिली गाईडची नावनोंदणी यशस्वी झाली आहे! धन्यवाद, SIMACES LEARNING LLP/UNI?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007981660783434347`
//       }
//       if (lang == 'hn') {
//         smsUrl = `http://api.mairaads.com/index.php/sms/send/SMACES/` + mobile + `/बधाई हो, आपका श्री फॅमिली गाईड का पंजीकरण सफल है! शुक्रिया! SIMACES LEARNING LLP/UNI?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007070228329637379`
//       }
//       if (lang == 'en') {
//         smsUrl = `http://api.mairaads.com/index.php/sms/send/SMACES/` + mobile + `/Congratulations, ` + name + `! Your Sri Family Guide enrolment is successful! Warm Regards, SIMACES LEARNING LLP/TXT?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007387634112691183`
//       }

//       let smsResponse = await axios({
//         method: 'get',
//         url: smsUrl,
//       })
//       // console.log('SMS sent successfully to', smsResponse.data);
//       return smsResponse.data;

//     } catch (error) {
//       // console.log('SMS failed error--', error);
//       return error;
//     }
//   }

//   async OnlineZoomEventRegistrationSMS(mobile, lang, date, eventLink) {
//     try {
//       let smsUrl
//       if (lang == 'mr') {
//         smsUrl = "http://api.mairaads.com/index.php/sms/send/SMACES/"+mobile+"/Dear User, Your SFG event registration was successful! click "+eventLink+" to attend on "+date+" SIMACES LEARNING LLP/TXT?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007279278709885430"
//       }
//       if (lang == 'hn') {
//         smsUrl = "http://api.mairaads.com/index.php/sms/send/SMACES/"+mobile+"/Dear User, Your SFG event registration was successful! click "+eventLink+" to attend on "+date+" SIMACES LEARNING LLP/TXT?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007279278709885430"
//       }
//       if (lang == 'en') {
//         smsUrl = "http://api.mairaads.com/index.php/sms/send/SMACES/"+mobile+"/Dear User, Your SFG event registration was successful! click "+eventLink+" to attend on "+date+" SIMACES LEARNING LLP/TXT?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007279278709885430";
//       }

//       let smsResponse = await axios({
//         method: 'get',
//         url: smsUrl,
//       })
//       console.log('SMS sent successfully to', smsResponse.data);
//       return smsResponse.data;

//     } catch (error) {
//       console.log('SMS failed error--', error.messages);
//       return error;
//     }
//   }

//   async OfflineEventRegistrationSMS(mobile, lang, date, eventQRCodeLink) {
//     try {
//       let smsUrl
//       if (lang == 'mr') {
//         smsUrl = "http://api.mairaads.com/index.php/sms/send/SMACES/"+mobile+"/Dear User, Your SFG event registration was successful! click qr code "+eventQRCodeLink+" to attend on "+date+". SIMACES LEARNING LLP/TXT?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007861247737383570";
//       }

//       if (lang == 'hn') {
//         smsUrl = "http://api.mairaads.com/index.php/sms/send/SMACES/"+mobile+"/Dear User, Your SFG event registration was successful! click qr code "+eventQRCodeLink+" to attend on "+date+". SIMACES LEARNING LLP/TXT?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007861247737383570";
//       }
//       if (lang == 'en') {
//         smsUrl = "http://api.mairaads.com/index.php/sms/send/SMACES/"+mobile+"/Dear User, Your SFG event registration was successful! click qr code "+eventQRCodeLink+" to attend on "+date+". SIMACES LEARNING LLP/TXT?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007861247737383570";
//       }

//       let smsResponse = await axios({
//         method: 'get',
//         url: smsUrl,
//       })
//       console.log('SMS sent successfully to', smsResponse.data);
//       return smsResponse.data;

//     } catch (error) {
//       console.log('SMS failed error--', error.message);
//       return error;
//     }
//   }

//   async SFG_SUBSCRIPTION_INVOICE_SMS(mobile, lang, userName, invoiceLink) {
//     try {
//       let smsUrl
//       if (lang == 'mr') {
//         smsUrl = `http://api.mairaads.com/index.php/sms/send/SMACES/${mobile}/Dear ${userName}, Your SFG subscription payment was successful! Download invoice here ${invoiceLink} - SIMACES LEARNING LLP/TXT?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007328231497074703`
//       }

//       if (lang == 'hn') {
//         smsUrl = `http://api.mairaads.com/index.php/sms/send/SMACES/${mobile}/Dear ${userName}, Your SFG subscription payment was successful! Download invoice here ${invoiceLink} - SIMACES LEARNING LLP/TXT?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007328231497074703`
//       }
//       if (lang == 'en') {
//         smsUrl = `http://api.mairaads.com/index.php/sms/send/SMACES/${mobile}/अभिनंदन ${userName}! तुमची श्री फॅमिली गाईडची नावनोंदणी यशस्वी झाली आहे! धन्यवाद, SIMACES LEARNING LLP/UNI?username=SIMACESS&pass=Sakal@1932&dltentityid=1001752485946186438&dlttempid=1007981660783434347`
//       }

//       console.log("----sms url----",smsUrl);
//       let smsResponse = await axios({
//         method: 'get',
//         url: smsUrl,
//       })
//       console.log('SMS sent successfully to', smsResponse.data);
//       return smsResponse.data;

//     } catch (error) {
//       // console.log('SMS failed SFG_SUBSCRIPTION_INVOICE_SMS error--', error);
//       console.log('SMS failed SFG_SUBSCRIPTION_INVOICE_SMS error--', error.message);
//       return error;
//     }
//   }

//   async sendSakalSMStoVendor(mobileNumber, otp) {
//     let data = "http://www.bulksms.mairaads.com/api/mt/SendSMS?user=SMGPNE&password=Sakal@2030&senderid=SAKYIN&DCS=0&flashsms=0&number=" + mobileNumber + "&text=" + otp + "is your OTP for YIN. Please DO NOT share your OTP. - Sakal Media Private Limited&route=0&channel=Trans";
//     axios.get(data).then(res => {
//       console.log("sendSakalSMStoVendor------ ", res);
//       console.log("sendSakalSMStoVendor---data--- ", res.data);
//       console.log("sendSakalSMStoVendor--MessageData---- ", res.data.MessageData);
//     }).catch((error) => {
//       console.log("error in sendSakalSMStoVendor", error);
//       logger.info(error);
//       return "Error in sakal sms OTP";
//     })

//   }

//   async SFG_SMSGATEWAYHUB_QR(mobile, lang, userName, invoiceLink){
//     try{
//       var data ={
//         Account: {
//           APIkey: process.env.APIKEY,
//           SenderId: process.env.SIDSFG,
//           Channel: "2",
//           DCS: "0",
//           SchedTime: null,
//           GroupId: null
//           },
//           Messages: [
//             {
//               Text: "Dear User, Your SFG event registration was successful! click qr code invoiceLink to attend on 12 May 2024. SIMACES LEARNING LLP",
//               Number: "91"+mobile
//             }
//           ]
//       };
//       let smsResponse = await axios({
//         method: 'post',
//         url: process.env.SUP,
//         data: JSON.parse(JSON.stringify(data))

//       });
//       console.log(smsResponse.data)
//       return smsResponse;
//     }catch(error){
//       console.log("----error----",error);
//       return error;
//     }
//   }

//   async sendSMSEVENTRegistration(mobiles, name, event_name, link) {
//     // let shortlink = await bitly.shorten(link);
//     console.log("----sendSMSEVENTRegistration---",mobiles, name, event_name, link)
//     var data = {
//       "name": name,
//       "eventname": event_name,
//       "sendingNo": mobiles,
//       "link1": link,
//       "link2": ' ',
//       "link3": ' '
//     };
//     let smsResponse = await axios({
//       method: 'post',
//       url: process.env.SMS_APP_SMS + "/yin/eventbookingconfirmation",
//       data: JSON.parse(JSON.stringify(data))
//     }).then((data) => {
//       // console.log(data);
//       console.log('SMS sent successfully to', mobiles);
//     }).catch((error) => {
//       console.log('SMS failed to send error--', error);
//     });
//   }

// }

// module.exports = SMSGateway;
