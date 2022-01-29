'use strict';
const responseMap = require('../../utils/responseMap');

const invalidNumberFallback = (agent) => {
    agent.add(responseMap.invalidNumberFallback);
};

module.exports = invalidNumberFallback;
