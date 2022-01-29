const winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
  });
module.exports = (req, res, done) => {
    logger.info(req.originalUrl);
    done();
};
