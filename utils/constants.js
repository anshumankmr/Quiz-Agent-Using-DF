const process = require('process');

module.exports = {
 port : process.env.PORT || 3000,
 environment: process.env.SERVICE || 'localhost'

}