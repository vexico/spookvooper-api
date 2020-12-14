// SpookVooper API - modules/Auth.ts
// Written by Bryce Bauer and Brendan Lane - https://github.com/bluebeargreen-2 and https://brndnln.dev/

import axios from 'axios'
import { AuthConfig } from './types/Types'

const authURL = 'https://spookvooper.com/oauth2'

class Auth {
  private appsecret: string
  private code: string
  private appid: string
  public urlReturn: string

  constructor (config: AuthConfig) {
    if (config.clientid === undefined || config.clientsecret === undefined) {
      throw new Error('The parans \'clientid\' and \'clientsecret\' must be defined')
    }

    this.appid = config.clientid
    this.appsecret = config.clientsecret
  }

  public get clientsecret (): string {
    return this.appsecret
  }

  public set clientsecret (clientsecret: string) {
    this.appsecret = clientsecret
  }

  public get authcode (): string {
    return this.code
  }

  public set authcode (authcode: string) {
    this.code = authcode
  }

  public get clientid (): string {
    return this.appid
  }

  public set clientid (clientid: string) {
    this.appid = clientid
  }

  public genLink (redirect: string, scope: string, state?: string): string {
    if (redirect === undefined || scope === undefined) {
      throw new Error('Arguments \'redirect\' and \'scope\' are required')
    } else if (state === undefined) {
      state = ''
      this.urlReturn = `${authURL}/authorize?response_type=code&client_id=${this.clientid}&redirect_uri=${redirect}&scope=${scope}&state=${state}`
      this.urlReturn = this.urlReturn.split(' ').join('%20')
      return this.urlReturn
    } else {
      this.urlReturn = `${authURL}/authorize?response_type=code&client_id=${this.clientid}&redirect_uri=${redirect}&scope=${scope}&state=${state}`
      this.urlReturn = this.urlReturn.split(' ').join('%20')
      return this.urlReturn
    }
  }

  public async requestToken (redirect: string): Promise<any> {
    return await new Promise((resolve, reject) => {
      axios.get(`${authURL}/requestToken`, {
        params: {
          grant_type: 'authorization_code',
          code: this.code,
          redirect_uri: redirect,
          client_id: this.appid,
          client_secret: this.appsecret
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

export default Auth
