/* eslint-disable @typescript-eslint/strict-boolean-expressions */

// SpookVooper API - modules/depersonalized/group.ts
// Written by Brendan Lane - https://brndnln.dev/

import axios from 'axios'

const baseURL = 'https://api.spookvooper.com/group'

async function doesGroupExist (svid: string, errToConsole?: boolean): Promise<any> {
  return await new Promise((resolve, reject) => {
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

async function getSvidFromName (name: string, errToConsole?: boolean): Promise<any> {
  return await new Promise((resolve, reject) => {
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

export {
  getSvidFromName,
  doesGroupExist
}
