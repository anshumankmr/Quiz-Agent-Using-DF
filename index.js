const start = require("./server")
async function createApp()
{
    await start.start();
}
createApp()