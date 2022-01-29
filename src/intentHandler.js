const welcome = require('./intents/welcome');
const getQuestionNumber = require('./intents/get-question-number');
const invalidNumberFallback = require('./intents/invalidNumberFallback');
const askQuestion = require('./intents/ask-question');
const correctAnswer = require('./intents/correct');
const incorrectAnswer = require('./intents/incorrect');

function createIntentMap()
{
 const intentMap = new Map();
 intentMap.set('Default Welcome Intent', welcome);
 intentMap.set('Get Questions Number',getQuestionNumber);
 intentMap.set('Invalid Number Fallback', invalidNumberFallback);
 intentMap.set('Ask Question', askQuestion);
 intentMap.set('Correct Answer',correctAnswer);
 intentMap.set('Incorrect Answer',incorrectAnswer);
 return intentMap;
}
module.exports = createIntentMap;