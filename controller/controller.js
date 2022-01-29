const { WebhookClient } = require('dialogflow-fulfillment');
const createIntentMap = require("../src/intentHandler");

const intentMapper = (req,res) =>
{
  const agent = new WebhookClient({ request: req, response: res });
  const intentMap = createIntentMap(agent);
  agent.handleRequest(intentMap);
  return agent;
};
const getHealth = (req,res) =>
{
  res.send("Looks Okay" );
};

module.exports = { intentMapper : intentMapper , getHealth : getHealth };