// /* eslint-disable no-unused-vars */
// module.exports = {
//   formatString: function (name) {
//     let NameData = name.replace(/[^a-zA-Z0-9]/g, "");
//     let TRIMNAME = NameData.replace(/\s/g, "");
//     let UPPER_NAME = TRIMNAME.toUpperCase();
//     return UPPER_NAME;
//   },
//   getCityName: function (name) {
//     let NameData = name.replace(/[^a-zA-Z0-9]/g, "");
//     let TRIMNAME = NameData.replace(/\s/g, "");
//     let UPPER_NAME = TRIMNAME.toUpperCase();
//     let cityCode = UPPER_NAME.substring(0, 3);
//     return cityCode;
//   },
//   UPPERNAME: function (name) {
//     let UPPER_NAME = name.toUpperCase();
//     return UPPER_NAME;
//   },
//   LOWERCASE: function (name) {
//     let LOWER_NAME = name.toLowerCase();
//     return LOWER_NAME;
//   },
//   getRandomNumber: function (length) {
//     return Math.floor(
//       Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)
//     );
//   },
//   capitalise: function (string) {
//     let strArr = String(string).split(" ");
//     let res = strArr.map((word) => {
//       return String(word).trim().charAt(0).toUpperCase() + String(word).trim().slice(1)
//     })
//     return res.join(" ");
//   },
//   replaceDataBase64(datas) {
//     let data = datas.replace(/^data:image\/\w+;base64,/, "");
//     return data;
//   },
// };
