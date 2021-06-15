/* eslint-disable @typescript-eslint/strict-boolean-expressions */

// SpookVooper API - modules/depersonalized/user.ts
// Written by Quinn Lane - https://quinnlane.dev/

import axios from 'axios'

const baseURL = 'https://api.spookvooper.com/user'

async function getSvidFromUsername (username: string, errToConsole?: boolean): Promise<any> {
  return await new Promise((resolve, reject) => {
    axios.get(`${baseURL}/getSvidFromUsername?username=${username}`)
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

async function getUsernameFromDiscord (discordid: string, errToConsole?: boolean): Promise<any> {
  return await new Promise((resolve, reject) => {
    axios.get(`${baseURL}/getUsernameFromDiscord?discordid=${discordid}`)
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

async function getSvidFromDiscord (discordid: string, errToConsole?: boolean): Promise<any> {
  return await new Promise((resolve, reject) => {
    axios.get(`${baseURL}/getSvidFromDiscord?discordid=${discordid}`)
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

async function getUsernameFromMinecraft (minecraftid: string, errToConsole?: boolean): Promise<any> {
  return await new Promise((resolve, reject) => {
    axios.get(`${baseURL}/getUsernameFromMinecraft?minecraftid=${minecraftid}`)
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

async function getSvidFromMinecraft (minecraftid: string, errToConsole?: boolean): Promise<any> {
  return await new Promise((resolve, reject) => {
    axios.get(`${baseURL}/getSvidFromMinecraft?minecraftid=${minecraftid}`)
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
  getSvidFromUsername,
  getSvidFromMinecraft,
  getSvidFromDiscord,
  getUsernameFromDiscord,
  getUsernameFromMinecraft
}
