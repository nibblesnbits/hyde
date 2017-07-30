const winston = require('winston');

module.exports = {
  getFileOnly: (path = 'hyde.log') => new (winston.Logger)({
    transports: [
      new (winston.transports.File)({ filename: path }),
    ],
  }),
  getConsole: () => new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
    ],
  }),
  getHybrid: (filePath = 'hyde.log') => new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: filePath }),
    ],
  }),
};
