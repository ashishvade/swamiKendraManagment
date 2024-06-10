/* eslint-disable no-undef */

const { format} = require('winston');
const winston = require('winston');
require('winston-daily-rotate-file');
const path = require('path');

const currentPath=path.resolve(__dirname);
var transport = new winston.transports.DailyRotateFile({
  filename: currentPath+"/logs/SRIFAMILYGUID-%DATE%.log",
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '1d',
  maxFiles: '14d'
});

transport.on('rotate', function(oldFilename, newFilename) {
  // do something fun
  console.log(oldFilename);
  console.log(newFilename);
});

const Logger = winston.createLogger({
  // change level if in dev environment versus production
  level:'debug',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    transport
  ]
});


module.exports = Logger;