// SpookVooper API - modules/User.js
// Written by Brendan Lane - https://brndnln.dev

const axios = require('axios')
const userURL = "https://api.spookvooper.com/user"
const ecoURL = "https://api.spookvooper.com/eco"

class User {
    #apikey = undefined;

    constructor(svid) {
        this.svid = svid

        if (!this.svid.startsWith('u-')) {
            throw "Error: A user must have a 'u-' or else it is not a user!"
        }
    }

    getUser() {
        return new Promise((resolve, reject) => {
            axios.get(`${userURL}/getUser?svid=${this.svid}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    getUsername() {
        return new Promise((resolve, reject) => {
            axios.get(`${userURL}/getUsername?svid=${this.svid}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    getBalance() {
        return new Promise((resolve, reject) => {
            axios.get(`${ecoURL}/getBalance?svid=${this.svid}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    hasDiscordRole(role) {
        return new Promise((resolve, reject) => {
            axios.get(`${userURL}/hasDiscordRole?userid=${this.svid}&role=${role}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    getDiscordRoles() {
        return new Promise((resolve, reject) => {
            axios.get(`${userURL}/getDiscordRoles?svid=${this.svid}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    getDaysSinceLastMove() {
        return new Promise((resolve, reject) => {
            axios.get(`${userURL}/getDaysSinceLastMove?svid=${this.svid}`)
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

    getUserStockOffers(ticker) {
        return new Promise((resolve, reject) => {
            axios.get(`${ecoURL}/getUserStockOffers?ticker=${ticker}&svid=${this.svid}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    buyStock(ticker, amount, price) {
        return new Promise((resolve, reject) => {
            axios.get(`${ecoURL}/submitStockBuy?ticker=${ticker}&count=${amount}&price=${price}&accountid=${this.svid}&auth=${this.#apikey}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    sellStock(ticker, amount, price) {
        return new Promise((resolve, reject) => {
            axios.get(`${ecoURL}/submitStockSell?ticker=${ticker}&count=${amount}&price=${price}&accountid=${this.svid}&auth=${this.#apikey}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    cancelStockOrder(orderid) {
        return new Promise((resolve, reject) => {
            axios.get(`${ecoURL}/cancelOrder?orderid=${orderid}&accountid=${this.svid}&auth=${this.#apikey}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
}

module.exports = User