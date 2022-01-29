'use strict';
const responseMap = require('../../utils/responseMap');
const { setTemplate, createContext } = require('../../services/services');

const getQuestionNumber = (agent) => {
    let globalParameters = agent.getContext('global-parameters').parameters;
    const questionNumber = globalParameters.questionNumber || null;
    if (questionNumber && questionNumber > 10 ){
        agent.add(responseMap.invalidQuestionNumber);
        const getNumberContext = createContext('GetQuestionsNumber-followup',2);
        agent.setContext(getNumberContext);

    }
    else {
        const values = {'questionNumber': questionNumber};
        agent.add(setTemplate(responseMap.getQuestionNumber,values));
        globalParameters = createContext('global-parameters',99);
        agent.setContext(globalParameters);
    } 
};

module.exports = getQuestionNumber;
