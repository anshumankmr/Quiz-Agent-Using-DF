'use strict';
const responseMap = require('../../utils/responseMap');
const { createContext } = require('../../services/helpers');

const getQuestionNumber = (agent) => {
    const globalParameters = agent.getContext('global-parameters');
    const getQuestionsNumberFollowup = agent.getContext('getquestionsnumber-followup');

    const questionNumber = globalParameters.parameters.questionNumber || null;
    if (questionNumber && questionNumber > 50 ){
        agent.add(responseMap.invalidQuestionNumber);
        getQuestionsNumberFollowup.lifespan  = 2; 
    }
    else {
        agent.add('Dummy Text');//https://github.com/dialogflow/dialogflow-fulfillment-nodejs/issues/267
        getQuestionsNumberFollowup.lifespan  = 0; 
        const answerQuestionsFollowup = createContext('AnswerQuestions-followup',2);
        agent.setContext(answerQuestionsFollowup);
        agent.setFollowupEvent('Ask-Question');
    } 
    globalParameters.lifespan = 999;
    agent.setContext(globalParameters);
    agent.setContext(getQuestionsNumberFollowup);

};

module.exports = getQuestionNumber;
