// SpookVooper API - modules/Group.js
// Written by Brendan Lane - https://brndnln.dev/

const axios = require('axios');
const groupURL = 'https://api.spookvooper.com/group'
const ecoURL = 'https://api.spookvooper.com/eco'

class Group {
    svid = undefined;
    #apikey = undefined;

    constructor(svid) {
        this.svid = svid;

        if (!this.svid.startsWith('g-')) {
            throw "Error: A group must have a 'g-' or else it is not a group!"
        }
    }

    getGroup() {
        return new Promise((resolve, reject) => {
            axios.get(`${groupURL}/getGroup?svid=${this.svid}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    set setApiKey(key) {
        this.#apikey = key;
    }

    sendCredits(amount, to, reason) {
        if (typeof to === "string") {
            return new Promise((resolve, reject) => {
                axios.get(`${ecoURL}/sendTransactionByIds?from=${this.svid}&to=${to}&amount=${amount}&auth=${this.#apikey}&detail=${reason}`)
                    .then(function (response) {
                        resolve(response.data);
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            });
        } else if (typeof to === "object") {
            return new Promise((resolve, reject) => {
                axios.get(`${ecoURL}/sendTransactionByIds?from=${this.svid}&to=${to.svid}&amount=${amount}&auth=${this.#apikey}&detail=${reason}`)
                    .then(function (response) {
                        resolve(response.data);
                    })
                    .catch(function (error) {
                        reject(error);
                    });
                });
        } else {
            throw "The 'to' parameter must be a string or an object!";
        }
    }

    doesGroupExist() {
        return new Promise((resolve, reject) => {
            axios.get(`${groupURL}/doesGroupExist?svid=${this.svid}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    getGroupMembers() {
        return new Promise((resolve, reject) => {
            axios.get(`${groupURL}/getGroupMembers?svid=${this.svid}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    hasGroupPermission(user, permission) {
        if (typeof to === "string") {
            return new Promise((resolve, reject) => {
                axios.get(`${groupURL}/hasGroupPermission?svid=${this.svid}&usersvid=${user}&permission=${permission}`)
                    .then(function (response) {
                        resolve(response.data);
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            });
        } else if (typeof to === "object") {
            return new Promise((resolve, reject) => {
                axios.get(`${groupURL}/hasGroupPermission?svid=${this.svid}&usersvid=${user.svid}&permission=${permission}`)
                    .then(function (response) {
                        resolve(response.data);
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            });
        } else {
            throw "Argument user must either be a string or an object"
        }
    }
}

module.exports = Group