// SpookVooper API - modules/premade.js
// Written by Brendan Lane

/** @module modules/premade */
import user from './user.js'
import eco from './eco.js'

let StockOwnerAmount

/**
 * Gets the total XP of a user
 * @function getTotalXP
 * @param {string} svid The svid of the user you want to lookup.
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be an integer).
 */
function getTotalXP (svid) {
  return new Promise((resolve) => {
    user.getUser(svid, true).then(value => {
      resolve(value.post_likes + value.comment_likes + (value.twitch_message_xp * 4) + (value.discord_commends * 5) + (value.discord_message_xp * 2) + (value.discord_game_xp / 100))
    })
  })
}

/**
 * Gets the name of the stock owner and the amount they own.
 * @function getStockOwner
 * @param {string} ticker The ticker you want to lookup.
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be an Object).
 */
function getStockOwner (ticker) {
  return new Promise((resolve) => {
    eco.getOwnerData(ticker, true).then(value => {
      StockOwnerAmount = value.length - 1
      resolve({ name: `${value[StockOwnerAmount].ownerName}`, amount: value[StockOwnerAmount].amount })
    })
  })
}

export default {
  getTotalXP,
  getStockOwner
}
