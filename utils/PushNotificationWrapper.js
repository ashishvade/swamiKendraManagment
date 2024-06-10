// /**
//     Author      : Piyushkumar Dubey
//     Created At  : 5th Sept 2019
//     Description : Customized Functions for Notifications
//  */
// var request = require('request')
// const logger = require('../logger/Logger');
// const FCM = require('fcm-node');
// const serverKey = require('../config/notification-in-node-js-firebase-adminsdk-zo234-65b0c6341b.json')
// const fcm = new FCM(serverKey)

// function sendNotification(firebaseToken, notification_title, notification_body, notification_image, notification_data, res) {
//   console.log("-----sendNotification------", firebaseToken)
//   let dataLink = {
//     link: "Home"
//   }
//   var message = {
//     registration_ids: firebaseToken,
//     notification: {
//       title: notification_title,
//       body: notification_body,
//       image: notification_image ? notification_image : "https://pbs.twimg.com/media/FsjGAxnWcAAxihT.jpg"
//     },
//     data: notification_data ? notification_data : dataLink
//   }

//   //   var message = {
//   //     registration_ids: registered_ids_array,
//   //     notification: {
//   //       title: notification_title,
//   //       body: notification_body,
//   //       sound:"default",
//   //       // image:"https://pbs.twimg.com/media/FsjGAxnWcAAxihT.jpg"
//   //     },
//   //     data:{
//   //         link:"ComplaintListing"
//   //     }
//   // }

//   // fcm.send(message, function(err, response) {
//   //     if (err) {
//   //         console.log('Error sent with response: ', err)
//   //         SuccessWrapper.SuccessResponse(599, res, err);
//   //     } else if (!response || !response.results) {
//   //         SuccessWrapper.SuccessResponse(599, res, err);
//   //     } else if (response.results[0].messageId) {
//   //         SuccessWrapper.SuccessResponse(220, res);
//   //     } else if (response.results[0].error) {
//   //         console.log(response.results)
//   //             // SuccessWrapper.SuccessResponse(221, res, response);
//   //     } else {
//   //         console.log('Successfully sent with response: ', response)
//   //     }
//   // })

//   return new Promise(function (resolve, reject) {
//     try {

//       fcm.send(message, function (err, response) {
//         console.log('Error sent with response:err--- ', err)
//         console.log('Error sent with response: ===> ', response)

//         if (err) {
//           console.log('Error sent with response: ', err)
//           reject(err)
//         } else if (!response || !response.results) {
//           reject(err);
//         } else {
//           console.log('Successfully sent with response: ', response)
//           resolve(response);

//         }
//       })

//     } catch (error) {
//       console.log("-----------error in sendNotification-------------", error)

//       logger.warn('PushNotificationWrapper.sendNotificationWithOutResponse: Caught the following error', error, ' of ', input)
//       reject(error)
//     }

//   })


// }



// function sendNotificationTouserNew(registered_ids_array, notification_title, notification_body, notification_image, notification_data, res) {
//   console.log("-----Push Notification Warapper sendNotification NEW------", registered_ids_array)
//   console.log("-----Push Notification Warapper sendNotification NEW------", notification_title)
//   console.log("-----Push Notification Warapper sendNotification NEW------", notification_body)
//   console.log("-----Push Notification Warapper sendNotification NEW------", notification_data)

//   // let dataLink = {
//   //           link:notification_data?notification_data:"Home"
//   //       }

//   let dataLink ={
//       "name": notification_data.name,
//       "params": JSON.stringify(notification_data.params)
//     }
  

//   let registeredIdsArr = [];
//   registeredIdsArr.push(registered_ids_array)
//   var message = {
//     registration_ids: registeredIdsArr,
//     notification: {
//       title: notification_title,
//       body: notification_body,
//       image: notification_image ? notification_image : ""
//     },
//     data: dataLink
//   }

//   return new Promise(function (resolve, reject) {
//     try {

//       fcm.send(message, function (err, response) {
//         // console.log('Error sent with response:err--- ', err)
//         // console.log('Error sent with response: ===> ', response)

//         if (err) {
//           console.log('Error sent with response: ', err)
//           reject(err)
//         } else if (!response || !response.results) {
//           reject(err);
//         } else {
//           console.log('Successfully sent with response: ', response)
//           resolve(response);

//         }
//       })

//     } catch (error) {
//       console.log("-----------error in sendNotificationTouserNew-------------", error)
//       logger.warn('PushNotificationWrapper.sendNotificationWithOutResponse: Caught the following error', error, ' of ', input)
//       reject(error)
//     }

//   })

//   // fcm.send(message, function(err, response) {
//   //   console.log('Error sent with response:err--- ', err)
//   //   console.log('Error sent with response: ===> ', response)

//   //     if (err) {
//   //         console.log('Error sent with response: ', err)
//   //         return(err)
//   //     } else if (!response || !response.results) {
//   //         return( err);
//   //     } else if (response.results[0].messageId) {
//   //         return(response.results[0].messageId);
//   //     } else {
//   //         console.log('Successfully sent with response: ', response)
//   //         return(response);

//   //     }
//   // })

// }

// function sendDataToPush(registered_ids_array, notification_data) {

//   console.log("-------sendDataToPush---------", registered_ids_array, notification_data)
//   return new Promise(function (resolve, reject) {
//     try {
//       Object.keys(notification_data).forEach(function (element) {
//         notification_data[element] = JSON.stringify(notification_data[element]);
//         console.log("----notification_data----", notification_data[element])

//       })

//       // console.log("----notification_data----",notification_data)
//       var message = {
//         registration_ids: registered_ids_array,
//         notification: {
//           title: 'YIN Team',
//           body: 'you have New Event Booking Name : Avinash Mobile Number:9637972850 ',
//           sound: "default",
//           //   image:"https://pbs.twimg.com/media/FsjGAxnWcAAxihT.jpg"
//         },
//         data: {
//           link: "ComplaintListing"
//         }
//       }


//       fcm.send(message, function (err, response) {
//         // console.log("----------fcm send---------",err)
//         // console.log("----------fcm send---------",response)
//         if (err) {
//           console.log('Error sent with response: ', err)
//           reject(err)
//         } else if (!response || !response.results) {
//           resolve({})
//         } else if (response.results[0].messageId) {
//           resolve(response)
//         } else if (response.results[0].error) {
//           reject(response.results[0].error)
//           // SuccessWrapper.SuccessResponse(221, res, response);
//         } else {
//           resolve(response)
//         }
//       })
//     } catch (error) {
//       reject(error);
//     }


//   })



// }
// /// --- Exports
// module.exports = {
//   sendNotification: sendNotification,
//   sendDataToPush: sendDataToPush,
//   sendNotificationTouserNew: sendNotificationTouserNew
// }