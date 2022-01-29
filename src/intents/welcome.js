'use strict';
const responseMap = require('../../utils/responseMap');
const { createContext } = require('../../services/services');

const welcome = (agent) => {
    agent.add(responseMap.welcome);
    const globalParameters = createContext('global-parameters',99);
    const getNumberContext = createContext('GetQuestionsNumber-followup',2);
    agent.setContext(getNumberContext);
    agent.setContext(globalParameters); 
};

module.exports = welcome;
