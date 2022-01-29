const welcome = require('./intents/welcome');
const getQuestionNumber = require('./intents/get-question-number');
const invalidNumberFallback = require('./intents/invalidNumberFallback')
function createIntentMap()
{
 const intentMap = new Map();
 intentMap.set('Default Welcome Intent', welcome);
 intentMap.set('Get Questions Number',getQuestionNumber);
 intentMap.set('Invalid Number Fallback', invalidNumberFallback);
 return intentMap;
}
module.exports = createIntentMap;