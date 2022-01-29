const constants = require('../utils/constants');
const {randomNumber } = require('./helpers');

const buildPayload = (questionData) => {
    //fetch from API
    // currently supports DF Messenger Platform
    // Telegram TBD
    let payload = {  "richContent": [Array(1)]};
    payload.richContent[0] = Array(constants.numberOfChips);
    const randomCorrectIndex = randomNumber(0,constants.numberOfChips-1);
    // console.log(randomCorrectIndex);
    
    let j = 0;
    for (let i = 0; i < constants.numberOfChips; i++) {
        if (i === randomCorrectIndex){
          payload.richContent[0][i] = {
            "type": "list",
            "title": questionData.correct_answer,
            "subtitle": `Option ${i}`,
            "event": {
              "name": "CorrectEvent",
              "languageCode": "en",
              "parameters": {}
            }
          }
        } else {
          payload.richContent[0][i] =  {
            "type": "list",
            "title":  questionData.incorrect_answers[j],
            "subtitle": `Option ${i}`,

            "event": {
              "name": "IncorrectEvent",
              "languageCode": "en",
              "parameters": {}
            }
          }
          j += 1;
        }
    } 
    return payload;
};
buildPayload({
  category: 'Entertainment: Music',
  type: 'multiple',
  difficulty: 'hard',
  question: 'What was the last Aphex Twin album released before his decade-long hiatus?',
  correct_answer: 'Drukqs',
  incorrect_answers: [ 'Windowlicker', 'Syro', 'Collected Ambient Works 85-92' ]
});
module.exports = { buildPayload};