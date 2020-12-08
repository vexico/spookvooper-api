// SpookVooper API - modules/Group.ts
// Written by Brendan Lane - https://brndnln.dev/

import axios from 'axios'
import { AuthEntity, CreditAmount, GroupMember, PaymentEntity } from './types/Types'

const groupURL = 'https://api.spookvooper.com/group'
const ecoURL = 'https://api.spookvooper.com/eco'

class Group {
  private accountid: string

  constructor (svid: string) {
    if (!svid.startsWith('g-')) {
      throw new Error('A group SVID must start with a \'g-\' to comply with the latest API changes')
    }

    this.accountid = svid
  }

  public async getGroup (): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${groupURL}/getGroup`, {
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

  public async sendCredits (amount: CreditAmount, to: PaymentEntity, reason: string, auth: AuthEntity): Promise<any> {
    if (typeof to === 'string') {
      return await new Promise((resolve, reject) => {
        axios.get(`${ecoURL}/sendTransactionByIds`, {
          params: {
            from: this.accountid,
            to: to,
            amount: amount,
            auth: auth.apikey,
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
            auth: auth.apikey,
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

  public async doesGroupExist (): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${groupURL}/doesGroupExist`, {
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

  public async getGroupMembers (): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${groupURL}/getGroupMembers`, {
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

  public async hasGroupPermission (user: GroupMember, permission: string): Promise<any> {
    if (typeof user === 'string') {
      return await new Promise((resolve, reject) => {
        axios.get(`${groupURL}/hasGroupPermission`, {
          params: {
            svid: this.accountid,
            usersvid: user,
            permission: permission
          }
        })
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    } else if (typeof user === 'object') {
      return await new Promise((resolve, reject) => {
        axios.get(`${groupURL}/hasGroupPermission`, {
          params: {
            svid: this.accountid,
            usersvid: user.svid,
            permission: permission
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
      throw new Error('Argument \'user\' must either be a string or an object!')
    }
  }

  public get svid (): string {
    return this.accountid
  }

  public set svid (svid: string) {
    if (!svid.startsWith('g-')) {
      throw new Error('A group SVID must start with a \'g-\' to comply with the latest API changes')
    }

    this.accountid = svid
  }
}

export default Group
