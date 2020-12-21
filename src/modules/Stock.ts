// SpookVooper API - modules/Stock.js
// Written by Bryce Bauer and Brendan Lane - https://github.com/bluebeargreen-2 and https://brndnln.dev/

import axios from 'axios'
const ecoURL = 'https://api.spookvooper.com/eco'

class Stock {
  private stockTicker: string

  public get ticker (): string {
    return this.stockTicker
  }

  public set ticker (ticker: string) {
    this.stockTicker = ticker.toUpperCase()
  }

  constructor (ticker: string) {
    this.ticker = ticker.toUpperCase()
  }

  public async getValue (): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${ecoURL}/getStockValue`, {
        params: {
          ticker: this.stockTicker
        }
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  public async getBuyPrice (): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${ecoURL}/getStockBuyPrice`, {
        params: {
          ticker: this.stockTicker
        }
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

export default Stock
