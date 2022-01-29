const process = require('process');

module.exports = {
 port : process.env.PORT || 3000,
 environment: process.env.SERVICE || 'localhost',
 apiEndpoint: process.env.API_ENDPOINT || 'https://opentdb.com/api.php?amount=10&type=multiple',

  numberOfChips: 4

}