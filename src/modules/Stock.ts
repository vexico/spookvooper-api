// SpookVooper API - modules/Stock.js
// Written by Bryce Bauer and Brendan Lane - https://github.com/bluebeargreen-2 and https://brndnln.dev/

import axios from 'axios'
import { QueueType } from './types/Types'
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

  public async getQueueInfo (type: QueueType): Promise<any> {
    switch (type.toUpperCase()) {
      case 'BUY':
        break

      case 'SELL':
        break

      default:
        throw new Error('Parameter \'type\' must be \'BUY\' or \'SELL\'')
    }

    return await new Promise((resolve, reject) => {
      axios.get(`${ecoURL}/getQueueInfo`, {
        params: {
          ticker: this.stockTicker,
          type: type.toUpperCase()
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

  public async getOwnerData (): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${ecoURL}/getOwnerData`, {
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
