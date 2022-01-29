const _ = require('lodash');

const setTemplate = (response, values) => {
    const modifiedResponse =  _.template(response);
    const finalResponse = modifiedResponse(values);
    return finalResponse;
};

const createContext = (name,lifespan) => {
    return {
        'name': name,
        'lifespan': lifespan, 
        'parameters': 
        {
        
        }
    };
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
module.exports = {
    setTemplate: setTemplate,
    createContext: createContext,
    randomNumber: randomIntFromInterval
};