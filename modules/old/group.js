// SpookVooper API - modules/group.js
// Written by Brendan Lane

/** @module modules/group */
import axios from 'axios'

const baseURL = 'https://api.spookvooper.com/group'

/**
 * Checks if a group exists.
 * @function doesGroupExist
 * @param {string} svid The svid of the group in question.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a boolean).
 * @author Brendan Lane <me@imbl.me>
 */
function doesGroupExist (svid, errToConsole) {
  return new Promise((resolve, reject) => {
    axios.get(`${baseURL}/doesGroupExist?svid=${svid}`)
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

/**
 * Gets all members of a group.
 * @function getGroupMembers
 * @param {string} svid The svid of the group in question.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a JSON object).
 * @author Brendan Lane <me@imbl.me>
 */
function getGroupMembers (svid, errToConsole) {
  return new Promise((resolve, reject) => {
    axios.get(`${baseURL}/getGroupMembers?svid=${svid}`)
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

/**
 * Gets all members of a group.
 * @function hasGroupPermission
 * @param {string} svid The svid of the group in question.
 * @param {string} usersvid The svid of the user you want to check
 * @param {string} permission The permission you want to search for
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a JSON object).
 * @author Brendan Lane <me@imbl.me>
 */
function hasGroupPermission (svid, usersvid, permission, errToConsole) {
  return new Promise((resolve, reject) => {
    axios.get(`${baseURL}/hasGroupPermission?svid=${svid}&usersvid=${usersvid}&permission=${permission}`)
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

/**
 * Gets the SVID from a name
 * @function getSvidFromName
 * @param {string} name The name of the group
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a JSON object).
 * @author Brendan Lane <me@imbl.me>
 */
function getSvidFromName (name, errToConsole) {
  return new Promise((resolve, reject) => {
    axios.get(`${baseURL}/getSvidFromName?name=${name}`)
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

/**
 * Gets the name of the group
 * @function getGroupMembers
 * @param {string} svid The svid of the group in question.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a JSON object).
 * @author Brendan Lane <me@imbl.me>
 */
function getName (svid, errToConsole) {
  return new Promise((resolve, reject) => {
    axios.get(`${baseURL}/getName?svid=${svid}`)
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
  doesGroupExist,
  getGroupMembers,
  hasGroupPermission,
  getSvidFromName,
  getName
}
