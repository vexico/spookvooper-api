const SVAPI = require('./main.js')

const spike = new SVAPI.User('u-2a0057e6-356a-4a49-b825-c37796cb7bd9')
const jacob = new SVAPI.User('u-c60c6bd8-0409-4cbd-8bb8-3c87e24c55f8')
const brendan = new SVAPI.User('u-02c977bb-0a6c-4eb2-bfca-5e9101025aaf')

async function sex () {
  console.log(await brendan.getBalance())
  console.log(await spike.getBalance())
  brendan.setApiKey('api-key')
  await brendan.sendCredits(1, 'u-2a0057e6-356a-4a49-b825-c37796cb7bd9', 'Testing SpookVooper API - DOWNLOAD IT NOW https://npmjs.org/package/spookvooperapi')
  console.log(await brendan.getBalance())
  console.log(await spike.getBalance())

sex()