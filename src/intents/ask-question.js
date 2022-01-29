'use strict';
const responseMap = require('../../utils/responseMap');
const { setTemplate } = require('../../services/helpers');
const { Payload } = require('dialogflow-fulfillment');
const { buildPayload }  = require('../../services/build-payload');

const askQuestion = (agent) => {
    const globalParameters = agent.getContext('global-parameters');
    const questionNumber = globalParameters.parameters.questionNumber || null;
    const counter = globalParameters.parameters.counter || 1;
    const questionData = globalParameters.parameters.questionData.results[counter-1];
    // console.log(counter);
    if (counter === 1) {

        // use payload to dynamically render response card
        // set response for telegram
        
        const values = {'questionNumber': questionNumber};
        const response = setTemplate(responseMap.getQuestionNumber, values) + '\n'+ questionData.question;
        agent.add(response);
        // globalParameters.parameters.counter += 1;
        globalParameters.parameters.finalScore = 0;
        agent.setContext(globalParameters); 
        const payload = buildPayload(questionData);
        agent.add(
            new Payload(agent.UNSPECIFIED, payload, {rawPayload: true, sendAsMessage: true})
        );
        // globalParameters.parameters.questionNumber -= 1;
       

    } else if (counter <= questionNumber) {
        const payload = buildPayload(questionData);

        const response = globalParameters.parameters.lastAnswer + '\n'+ questionData.question;
       
        agent.add(response);
        agent.add(
            new Payload(agent.UNSPECIFIED, payload, {rawPayload: true, sendAsMessage: true})
        );
        agent.setContext(globalParameters); 

    } 
    else {
        const values = {'finalScore': globalParameters.parameters.finalScore || 0 };
        agent.add(setTemplate(responseMap.finalScore, values));
    }
    //set output context

};

module.exports = askQuestion;
