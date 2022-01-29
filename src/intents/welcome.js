'use strict';
const responseMap = require('../../utils/responseMap');
const { createContext } = require('../../services/helpers');
const { getQuestionAPI } = require('../../services/api-helper');

const welcome = async (agent) => {
    const globalParameters = createContext('global-parameters',99);
    const getNumberContext = createContext('GetQuestionsNumber-followup',2);
    agent.setContext(getNumberContext);
    const questionData = await getQuestionAPI();//COMMENTING THIS TO AVOID API RATE LIMIT
    // const questionData = require('../../utils/api.php.json');// Sample JSON for testing purpose
    console.log("Question DATA",  questionData);
    globalParameters.parameters.questionData = questionData;
    agent.add(responseMap.welcome);

    agent.setContext(globalParameters); 
};

module.exports = welcome;
