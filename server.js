const express = require('express');
const routes = require('./router/router');
const app = express();
const logger = require('./services/logger');
const bodyParser = require('body-parser');
const cors = require('cors');
const constants = require('./utils/constants');
const port = constants.port;
app.disable('x-powered-by')
app.set('port',port);
app.use(logger);
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', routes)
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(` R.E.S.T A.P.I on  ${constants.environment} ${port}`)
    })
  } catch (e) {
    console.error(e)
  }
}

module.exports = {start: start, app: app};