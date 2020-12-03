// SpookVooper API - modules/District.js
// Written by Brendan Lane - https://brndnln.dev/

const axios = require('axios')
const ecoURL = 'https://api.spookvooper.com/eco'

class District {
    constructor(name) {
        this.name = name;
    }

    getWealth(type) {
        switch (type) {
            case "ALL":
                return new Promise((resolve, reject) => {
                    axios.get(`${ecoURL}/getDistrictWealth?id=${this.name}`)
                        .then(function (response) {
                            resolve(response.data);
                        })
                        .catch(function (error) {
                            reject(error);
                        });
                });
        
            case "USER":
                return new Promise((resolve, reject) => {
                    axios.get(`${ecoURL}/getDistrictUserWealth?id=${this.name}`)
                        .then(function (response) {
                            resolve(response.data);
                        })
                        .catch(function (error) {
                            reject(error);
                        });
                });
            
            case "GROUP":
                return new Promise((resolve, reject) => {
                    axios.get(`${ecoURL}/getDistrictGroupWealth?id=${this.name}`)
                        .then(function (response) {
                            resolve(response.data);
                        })
                        .catch(function (error) {
                            reject(error);
                        });
                });
            
            default:
                throw "Parameter 'type' must be 'ALL', 'USER', or 'GROUP'";
        }
    }
}

module.exports = District
