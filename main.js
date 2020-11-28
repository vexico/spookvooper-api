// SpookVooper API - main.js
// Written by Brendan Lane - https://brndnln.dev/

const userURL = "https://api.spookvooper.com/user";
const groupURL = "https://api.spookvooper.com/group";
const ecoURL = "https://api.spookvooper.com/eco";
const authURL = "https://spookvooper.com/oauth2";

const axios = require('axios');
let urlReturn;

class User {
    #apikey = undefined;

    constructor(svid) {
        this.svid = svid
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

    setApiKey(key) {
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

class Stock {
    constructor(ticker) {
        this.ticker = ticker;
    }

    getValue() {
        return new Promise((resolve, reject) => {
            axios.get(`${ecoURL}/getStockValue?ticker=${this.ticker}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    getStockBuyPrice() {
        return new Promise((resolve, reject) => {
            axios.get(`${ecoURL}/getStockBuyPrice?ticker=${this.ticker}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    getQueueInfo(type) {
        switch (type) {
            case "BUY":
                break;
        
            case "SELL":
                break;
            
            default:
                throw "Parameter 'type' must be 'BUY' or 'SELL'"
        }

        return new Promise((resolve, reject) => {
            axios.get(`${ecoURL}/getQueueInfo?ticker=${this.ticker}&type=${type}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    getOwner() {
        return new Promise((resolve, reject) => {
            axios.get(`${ecoURL}/getOwnerData?ticker=${this.ticker}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
}

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

class Group {
    #apikey = undefined;

    constructor(name) {
        this.name = name;
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

    setApiKey(key) {
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
        }
    }
}

class Auth {
    #clientsecret = undefined;
    #authcode = undefined;

    constructor(clientid, clientsecret) {
        this.clientid = clientid;
        this.#clientsecret = clientsecret;
    }

    genLink(redirect, scope, state) {
        if (redirect === undefined || scope === undefined) {
            throw "Both parameters 'redirect' and 'scope' must be defined!"
        } else if (state === undefined) {
            state = "";
            urlReturn = `${authURL}/authorize?response_type=code&client_id=${this.clientid}&redirect_uri=${redirect}&scope=${scope}&state=${state}`;
            urlReturn = urlReturn.split(" ").join("%20");
            return urlReturn;
        } else {
            urlReturn = `${authURL}/authorize?response_type=code&client_id=${this.clientid}&redirect_uri=${redirect}&scope=${scope}&state=${state}`;
            urlReturn = urlReturn.split(" ").join("%20");
            return urlReturn;
        }
    }

    setAuthCode(authcode) {
        this.#authcode = authcode;
    }

    requestToken(redirect) {
        return new Promise((resolve, reject) => {
            axios.get(`${authURL}/requestToken?grant_type=authorization_code&code=${this.#authcode}&redirect_uri=${redirect}&client_id=${this.clientid}&client_secret=${this.#clientsecret}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
}

module.exports = {
    User,
    Stock,
    District,
    Group,
    Auth
}