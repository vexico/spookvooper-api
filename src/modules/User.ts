// SpookVooper API - modules/User.ts
// Written by Brendan Lane - https://brndnln.dev

import axios from 'axios'
import { CreditAmount, PaymentEntity, SVStockTicker } from './types/Types'
import { ConfigUser } from './interfaces/Interfaces'

const userURL: string = 'https://api.spookvooper.com/user'
const ecoURL: string = 'https://api.spookvooper.com/eco'

class User {
  private accountid: string
  private authkey: string

  public constructor (config: ConfigUser) {
    if (!config.svid.startsWith('u-')) {
      throw new Error('A user svid must have a \'u-\' in front of it to comply with the latest API changes.')
    }

    this.accountid = config.svid
    if (config.apikey !== undefined) {
      this.authkey = config.apikey
    }
  }

  public async getUser (): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${userURL}/getUser`, {
        params: {
          svid: this.accountid
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

  public async getUsername (): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${userURL}/getUsername`, {
        params: {
          svid: this.accountid
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

  public async getBalance (): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${ecoURL}/getBalance`, {
        params: {
          svid: this.accountid
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

  public async hasDiscordRole (role: string): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${userURL}/hasDiscordRole`, {
        params: {
          userid: this.accountid,
          role: role
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

  public async getDiscordRoles (): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${userURL}/getDiscordRoles`, {
        params: {
          svid: this.accountid
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

  public async sendCredits (amount: CreditAmount, to: PaymentEntity, reason: string): Promise<any> {
    if (typeof to === 'string') {
      return await new Promise((resolve, reject) => {
        axios.get(`${ecoURL}/sendTransactionByIds`, {
          params: {
            from: this.accountid,
            to: to,
            amount: amount,
            auth: this.authkey,
            detail: reason
          }
        })
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    } else if (typeof to === 'object') {
      return await new Promise((resolve, reject) => {
        axios.get(`${ecoURL}/sendTransactionByIds`, {
          params: {
            from: this.accountid,
            to: to.svid,
            amount: amount,
            auth: this.authkey,
            detail: reason
          }
        })
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    } else {
      throw new Error('The \'to\' parameter must be a string or an object!')
    }
  }

  public async getStockOffers (ticker: SVStockTicker): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${ecoURL}/getUserStockOffers`, {
        params: {
          ticker: ticker,
          svid: this.accountid
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

  public async buyStock (ticker: SVStockTicker, amount: number, price: CreditAmount): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${ecoURL}/submitStockBuy`, {
        params: {
          ticker: ticker,
          count: amount,
          price: price,
          accountid: this.accountid,
          auth: this.authkey
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

  public async sellStock (ticker: SVStockTicker, amount: number, price: CreditAmount): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${ecoURL}/submitStockSell`, {
        params: {
          ticker: ticker,
          count: amount,
          price: price,
          accountid: this.accountid,
          auth: this.authkey
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

  public async cancelOffer (orderid: number): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${ecoURL}/cancelOrder`, {
        params: {
          orderid: orderid,
          accountid: this.accountid,
          auth: this.authkey
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

  public get apikey (): string {
    return this.authkey
  }

  public set apikey (apikey: string) {
    this.authkey = apikey
  }

  public get svid (): string {
    return this.accountid
  }

  public set svid (svid: string) {
    if (!svid.startsWith('u-')) {
      throw new Error('A user svid must have a \'u-\' in front of it to comply with the latest API changes.')
    }

    this.accountid = svid
  }
}

export default User
