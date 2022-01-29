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
module.exports = {
    setTemplate: setTemplate,
    createContext: createContext
};