'use strict';
const responseMap = require('../../utils/responseMap');
const { createContext } = require('../../services/helpers');

const correctAnswer = async (agent) => {
    const globalParameters = agent.getContext('global-parameters');
    globalParameters.parameters.lastAnswer = responseMap.correctAnswer;
    globalParameters.parameters.counter =( globalParameters.parameters.counter || 1) + 1 ;  
    globalParameters.parameters.finalScore = ( globalParameters.parameters.finalScore || 0) + 1 ;  
    globalParameters.lifespan = 999;
  
    agent.setContext(globalParameters); 

    agent.add('Dummy Text');//https://github.com/dialogflow/dialogflow-fulfillment-nodejs/issues/267
    const answerQuestionsFollowup = createContext('AnswerQuestions-followup',2);
    agent.setContext(answerQuestionsFollowup);
    agent.setFollowupEvent('Ask-Question');
};

module.exports = correctAnswer;
