'use strict';
const responseMap = require('../../utils/responseMap');
const { createContext } = require('../../services/helpers');

const incorrectAnswer = async (agent) => {
    const globalParameters = agent.getContext('global-parameters');
    globalParameters.parameters.lastAnswer = responseMap.incorrectAnswer;
    globalParameters.parameters.counter =( globalParameters.parameters.counter || 1) + 1 ;  

    globalParameters.lifespan = 999;
    agent.add('Dummy Text');//https://github.com/dialogflow/dialogflow-fulfillment-nodejs/issues/267
    const answerQuestionsFollowup = createContext('AnswerQuestions-followup',2);
    agent.setContext(answerQuestionsFollowup);
    agent.setFollowupEvent('Ask-Question');
    agent.setContext(globalParameters); 
};

module.exports = incorrectAnswer;
