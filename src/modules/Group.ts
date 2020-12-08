// SpookVooper API - modules/Group.ts
// Written by Brendan Lane - https://brndnln.dev/

import axios from 'axios'

const groupURL = 'https://api.spookvooper.com/group'
const ecoURL = 'https://api.spookvooper.com/eco'

class Group {
  private accountid: string

  constructor (svid: string) {
    this.accountid = svid
  }
}

export default Group
