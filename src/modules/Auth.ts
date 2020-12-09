import axios from 'axios'
const authURL = 'https://spookvooper.com/oauth2'

class Auth {
  private clientsecret
  private authcode
  private clientid

  constructor (clientid, clientsecret) {
    this.clientid = clientid
    this.clientsecret = clientsecret
  }
  
  

}