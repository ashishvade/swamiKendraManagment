// const fs = require("fs");
// const AWS = require("aws-sdk");
// const request = require("request");
// const ejs = require("ejs");
// // const PDFDocument = require('pdfkit');
// const Configs = require("../models/configModel");
// // const puppeteer = require('puppeteer');
// const pdf = require("html-pdf");
// const puppeteer = require("puppeteer");
// const path = require("path");
// const handlebars = require("handlebars");

// exports.fileUpload = async function (file) {
// 	const config = await Configs.find();
// 	let acckey = config[0].aws.accessKey;
// 	let seckey = config[0].aws.secretKey;
// 	let bucket = config[0].aws.bucket;

// 	AWS.config.update({
// 		accessKeyId: acckey,
// 		secretAccessKey: seckey,
// 		region: "ap-south-1",
// 	});

// 	const s3 = new AWS.S3();
// 	const bucketName = bucket;
// 	const key = bucket + "/" + Date.now() + file.originalname;

// 	try {
// 		const params = {
// 			Bucket: bucketName,
// 			Key: key,
// 			Body: file.buffer,
// 			ACL: "public-read",
// 		};

// 		return new Promise((resolve, reject) => {
// 			s3.upload(params, (err, data) => {
// 				if (err) {
// 					console.error("Error uploading image:", err);
// 					reject(err);
// 				} else {
// 					console.log("Image uploaded successfully.", data.Location);
// 					resolve(data.Location);
// 				}
// 			});
// 		});
// 	} catch (error) {
// 		console.error("Error reading file:", error);
// 		throw error;
// 	}
// };

// // Function For Call Payment API
// exports.Paycall = function (url, data, method = "POST") {
// 	var options = {
// 		method: method,
// 		url: url,
// 		headers: {
// 			"Content-Type": "application/x-www-form-urlencoded",
// 		},

// 		form: data,
// 	};
// 	return new Promise(function (resolve, reject) {
// 		request(options, function (error, response) {
// 			if (response) {
// 				var data = JSON.parse(response.body);
// 				console.log("data", data);
// 				return resolve(data);
// 			} else {
// 				return reject(error);
// 			}
// 		});
// 	});
// };

// exports.generatePDF = async function (invoiceData) {
// 	// USE THIS
// 	const templatePath = "views/invoice.ejs";
// 	const html = ejs.render(fs.readFileSync(templatePath, "utf-8"), {
// 		invoice: invoiceData,
// 	});
// 	const pdfOptions = { format: "a2" };

// 	try {
// 		const buffer = await new Promise((resolve, reject) => {
// 			pdf.create(html, pdfOptions).toBuffer((err, buffer) => {
// 				if (err) {
// 					console.error("Error creating PDF:", err);
// 					reject(err);
// 				} else {
// 					resolve(buffer);
// 				}
// 			});
// 		});

// 		const config = await Configs.find();
// 		let acckey = config[0].aws.accessKey;
// 		let seckey = config[0].aws.secretKey;
// 		let bucket = config[0].aws.bucket;

// 		AWS.config.update({
// 			accessKeyId: acckey,
// 			secretAccessKey: seckey,
// 			region: "ap-south-1",
// 		});

// 		const s3 = new AWS.S3();
// 		const bucketName = bucket;
// 		const key = bucket + "/" + Date.now() + "invoice.pdf";

// 		const params = {
// 			Bucket: bucketName,
// 			Key: key,
// 			Body: buffer,
// 			ACL: "public-read",
// 		};

// 		const data = await s3.upload(params).promise();
// 		console.log("PDF uploaded successfully.", data.Location);
// 		return data.Location;
// 	} catch (error) {
// 		console.error("Error generating or uploading PDF:", error);
// 		throw error;
// 	}
// };

// exports.generatePDF2 = async function (invoiceData) {

// 	try {

// 		let templatePath = "views/";

// 		let htmlPath = path.join(templatePath, "invoice.html");

// 		let html = fs.readFileSync(htmlPath, "utf-8");

// 		let template = handlebars.compile(html);

// 		let htmlContent = template(invoiceData);

// 		let browser = await puppeteer.launch({
// 			headless: "new",
// 			args: [
// 				"--disable-gpu",
// 				"--disable-dev-shm-usage",
// 				"--disable-setuid-sandbox",
// 				"--no-sandbox",
// 			],
// 		});

// 		const config = await Configs.find();

// 		let acckey = config[0].aws.accessKey;
// 		let seckey = config[0].aws.secretKey;
// 		let bucket = config[0].aws.bucket;

// 		let page = await browser.newPage();

// 		await page.setContent(htmlContent);

// 		let pdfBuffer = await page.pdf({ format: "A2" });

// 		let pdfName = `INVOICE_${Date.now()}.pdf`;

// 		let outputPath = path.join(templatePath, pdfName);

// 		fs.writeFileSync(outputPath, pdfBuffer);

// 		await browser.close();

// 		AWS.config.update({
// 			accessKeyId: acckey,
// 			secretAccessKey: seckey,
// 			region: "ap-south-1",
// 		});

// 		const s3 = new AWS.S3({ apiVersion: "2012-10-17" });

// 		const bucketName = bucket;
// 		const key = bucket + "/" + `INVOICE_${Date.now()}.pdf`;

// 		const params = {
// 			Bucket: bucketName,
// 			Key: key,
// 			Body: pdfBuffer,
// 			ACL: "public-read",
// 			ContentType: "application/pdf",
// 		};

// 		let result = await s3.upload(params).promise();

// 		fs.unlink(outputPath, (error) => {

// 			if (error) {

// 				console.log(error);

// 			}

// 			console.log("File Deleted: ", outputPath)

// 		});

// 		return result.Location;

// 	} catch (error) {

// 		console.log(error);

// 		throw error;

// 	}

// };

// exports.getTokenForMapAPI = async function (data) {
// 	var options = {
// 		method: "post",
// 		url: "https://outpost.mappls.com/api/security/oauth/token",
// 		headers: {
// 			"Content-Type": "application/x-www-form-urlencoded",
// 		},

// 		form: data,
// 	};
// 	return new Promise(function (resolve, reject) {
// 		request(options, function (error, response) {
// 			if (response) {
// 				var data = JSON.parse(response.body);
// 				return resolve(data);
// 			} else return reject(error);
// 		});
// 	});
// };

// exports.getAutofillData = async function (address, token) {
// 	var options = {
// 		method: "get",
// 		url: "https://atlas.mappls.com/api/places/search/json?query=" + address,
// 		headers: {
// 			"Content-Type": "application/x-www-form-urlencoded",
// 			Authorization: "Bearer " + token,
// 		},
// 	};
// 	return new Promise(function (resolve, reject) {
// 		request(options, function (error, response) {
// 			if (response) {
// 				var data = JSON.parse(response.body);
// 				return resolve(data);
// 			} else return reject(error);
// 		});
// 	});
// };

// // exports.generatePDF = async function (invoiceData) {

// //   const templatePath = 'views/invoice.ejs';
// //   const html = ejs.render(fs.readFileSync(templatePath, 'utf-8'), { invoice: invoiceData });

// //   const pdfOptions = { format: 'a2' };
// //   return new Promise((resolve, reject) => {

// //     pdf.create(html, pdfOptions).toBuffer(async (err, buffer) => {
// //       if (err) {
// //         console.error('Error creating PDF:', err);
// //         reject(err);
// //       } else {

// //         try {
// //           AWS.config.update({
// //             accessKeyId: 'AKIA4GWLDQ2LDVN27AYR',
// //             secretAccessKey: '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',
// //             region: 'ap-south-1',
// //           });

// //           const s3 = new AWS.S3();
// //           const bucketName = 'familyguide';
// //           const key = 'familyguide/' + 'invoice.pdf';

// //           const params = {
// //             Bucket: bucketName,
// //             Key: key,
// //             Body: buffer,
// //             ACL: 'public-read',
// //           };

// //           const data = await s3.upload(params).promise();
// //           console.log('PDF uploaded successfully.', data.Location);
// //           resolve(data.Location);
// //         } catch (error) {
// //           console.error('Error reading file:', error);
// //           throw error;
// //         }

// //     }
// //   })
// //   });

// // }
