// SpookVooper API - modules/District.ts
// Written by Brendan Lane - https://brndnln.dev/

import axios from 'axios'
import { District as DistrictType, DistrictWealthType, SenatorDistrict } from './types/Types'
import { ReturnedUser } from './interfaces/Interfaces'

const ecoURL = 'https://api.spookvooper.com/eco'
const userURL = 'https://api.spookvooper.com/user'
const Districts = [
  'Voopmont',
  'New Yam',
  'San Vooperisco',
  'Medievala',
  'Landing Cove',
  'New Spudland',
  'Vooperia City',
  'Corgi',
  'Old Yam',
  'New Vooperis',
  'The Netherlands',
  'Queensland',
  'Servers Past',
  'Los Vooperis',
  'Old King Peninsula'
]

class District {
  private districtName: DistrictType

  public get name (): DistrictType {
    return this.districtName
  }

  public set name (name: DistrictType) {
    if (!Districts.includes(name)) {
      throw new Error('The district must exist! To get a list of districts, please visit https://spookvooper.com/Government/Map')
    }

    this.districtName = name
  }

  constructor (name: DistrictType) {
    if (!Districts.includes(name)) {
      throw new Error('The district must exist! To get a list of districts, please visit https://spookvooper.com/Government/Map')
    }

    this.districtName = name
  }

  public async getWealth (type: DistrictWealthType): Promise<any> {
    switch (type.toUpperCase()) {
      case 'ALL':
        return await new Promise((resolve, reject) => {
          axios.get(`${ecoURL}/getDistrictWealth`, {
            params: {
              id: this.districtName
            }
          })
            .then((response) => {
              resolve(response.data)
            })
            .catch((error) => {
              reject(error)
            })
        })

      case 'USER':
        return await new Promise((resolve, reject) => {
          axios.get(`${ecoURL}/getDistrictUserWealth`, {
            params: {
              id: this.districtName
            }
          })
            .then((response) => {
              resolve(response.data)
            })
            .catch((error) => {
              reject(error)
            })
        })

      case 'GROUP':
        return await new Promise((resolve, reject) => {
          axios.get(`${ecoURL}/getDistrictGroupWealth`, {
            params: {
              id: this.districtName
            }
          })
            .then((response) => {
              resolve(response.data)
            })
            .catch((error) => {
              reject(error)
            })
        })

      default:
        throw new Error('Must use either \'ALL\', \'USER\', or \'GROUP\'!')
    }
  }

  public async getSenator (district?: SenatorDistrict): Promise<ReturnedUser> {
    return await new Promise((resolve, reject) => {
      axios.get(`${userURL}/getSenators`)
        .then((response) => {
          const data: any[] = response.data
          if (district !== undefined) {
            const found = data.find(user => user.district === district)
            resolve(found)
          } else if (district === 'ALL') {
            resolve(response.data)
          } else {
            const found = data.find(user => user.district === this.districtName)
            resolve(found)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default District
