// SpookVooper API - modules/auth.js
// Written by Brendan Lane

/** @module modules/auth */
import axios from 'axios'

const baseURL = 'https://spookvooper.com/oauth2'
let urlReturn

/**
 * Generates a Oauth2 URL for you. This just builds a string and DOES NOT need a promise. For any updates on how this works, check #sv-developer in the discord server. https://discord.gg/spookvooper. Get more information at the wiki. https://github.com/bowlingballindustries/spookvooper-api/wiki/Auth#authorize
 * @function authorize
 * @param {string} response_type The type of response you get back. Currently the only one that is supported is "code". This parameter is requried.
 * @param {string} client_id The client ID of your Oauth2 app. To get your client ID, go to https://spookvooper.com/oauth2. This parameter is requried.
 * @param {string} redirect_uri Where to redirect to once authorization has been granted. Will return a "code" and "state" parameter if successful. This parameter is requried.
 * @param {string} scope The scope of what you want to be able to receive. All scopes are allowed. This parameter is requried.
 * @param {string} state The state parameter can have anything here. Will be returned to the server upon completion. This parameter is optional.
 * @returns {string} Will return a string containing a link to the Oauth2 authorization page. If there is an error, it will return "ERROR: Oauth2 URL Builder - A required variable is undefined or is missing."
 */
function authorize (response_type, client_id, redirect_uri, scope, state) {
  if (response_type === undefined || client_id === undefined || redirect_uri === undefined || scope === undefined) {
    return 'ERROR: Oauth2 URL Builder - A required variable is undefined or is missing.'
  } else if (state === undefined) {
    state = ''
    urlReturn = `${baseURL}/authorize?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`
    urlReturn = urlReturn.split(' ').join('%20')
    return urlReturn
  } else {
    urlReturn = `${baseURL}/authorize?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`
    urlReturn = urlReturn.split(' ').join('%20')
    return urlReturn
  }
}

/**
 * Gets a token that you can use for Oauth2. For any updates on how this works, check #sv-developer in the discord server. https://discord.gg/spookvooper
 * @function requestToken
 * @param {string} grant_type The type of response you get back. Currently the one that is supported is "authorization_code"
 * @param {string} code The code that was returned from the authorization.
 * @param {string} redirect_uri Where to redirect to once authorization has been granted. Will return a "code" and "state" parameter if successful.
 * @param {string} client_id The client ID of your Oauth2 app. To get your client ID, go to https://spookvooper.com/oauth2.
 * @param {string} client_secret The client secret of your Oauth2 app. To get your client ID, go to https://spookvooper.com/oauth2. This WILL NOT get shared with anything other than the function it is in, and will not get sent anywhere other than https://spookvooper.com/. We take privacy very seriously. You must keep this safe.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a JSON Object containing the token, expire time in seconds, and the svid of the authorized user).
 */
function requestToken (grant_type, code, redirect_uri, client_id, client_secret, errToConsole) {
  return new Promise((resolve, reject) => {
    axios.get(`${baseURL}/requestToken?grant_type=${grant_type}&code=${code}&redirect_uri=${redirect_uri}&client_id=${client_id}&client_secret=${client_secret}`)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        if (errToConsole) {
          console.warn(error)
        } else {
          reject(error)
        }
      })
  })
}

export default {
  authorize,
  requestToken
}
