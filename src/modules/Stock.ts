// SpookVooper API - modules/Stock.js
// Written by Bryce Bauer - https://github.com/bluebeargreen-2

import axios from 'axios'
const ecoURL = 'https://api.spookvooper.com/eco'

class Stock {
  private ticker: string

  constructor (ticker) { 
    this.ticker = ticker.toUperCase()
  }
  public async getValue () {
    return await new Promise((resolve, reject) => {
      axios.get(`${ecoURL}/getStockValue?ticker=${this.ticker}`, {
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
