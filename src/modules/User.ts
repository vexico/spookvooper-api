// SpookVooper API - modules/User.ts
// Written by Brendan Lane - https://brndnln.dev

import axios from 'axios'
import { CreditAmount, PaymentEntity } from './types/Types'
import { ConfigUser, ReturnedUser } from './interfaces/Interfaces'

const userURL = 'https://api.spookvooper.com/user'
const ecoURL = 'https://api.spookvooper.com/eco'

const HasFossPP = [
  'u-02c977bb-0a6c-4eb2-bfca-5e9101025aaf',
  'u-c44e159c-92ef-4e0a-b87f-020c8a4be1b4',
  'u-66acf505-9c08-4bce-9fec-2c9c7923cf22'
]

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

  public async getUser (): Promise<ReturnedUser> {
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

  public async getDaysSinceLastMove (): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${userURL}/getDaysSinceLastMove`, {
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

  public async getStockOffers (ticker: string): Promise<any> {
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

  public async buyStock (ticker: string, amount: number, price: CreditAmount): Promise<any> {
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

  public async sellStock (ticker: string, amount: number, price: CreditAmount): Promise<any> {
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

  /*
  FIXME: This method is at the current moment deprecated. Please someone get on this.

  public async totalXP (): Promise<any> {
    return await new Promise((resolve, reject) => {
      try {
        const userData = this.getUser()
        resolve(userData.post_likes + userData.comment_likes + (userData.twitch_message_xp * 4) + (userData.discord_commends * 5) + (userData.discord_message_xp * 2) + (userData.discord_game_xp / 100))
      } catch (e) {
        reject(e)
      }
    })
  }
  */

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

  public hasFossPp (): boolean {
    if (HasFossPP.includes(this.accountid)) {
      return true
    } else {
      return false
    }
  }
}

export default User
