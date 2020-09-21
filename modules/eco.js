// SpookVooper API - modules/eco.js
// Written by Brendan Lane

/** @module modules/eco */
import axios from "axios";

let baseURL = "https://api.spookvooper.com/eco";

/**
 * Gets the balance of a user, given their svid.
 * @function getBalance
 * @param {string} svid The svid of the user in question.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a decimal).
 * @author Brendan Lane <me@imbl.me>
 */
function getBalance(svid, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getBalance?svid=${svid}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

/**
 * Makes a payment to and from accounts
 * @function sendTransactionByIDs
 * @param {string} to The svid of the user/group you want to send the payment to
 * @param {string} from The svid of the user/group you want to send the payment from
 * @param {string} amount The amount of money to be sent
 * @param {string} auth An api key which has permission to use funds from the sender
 * @param {string} detail A short detail of why the payment happened. Must include "sale" if it was a sale.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a string).
 * @author Brendan Lane <me@imbl.me>
 */
function sendTransactionByIDs(to, from, amount, auth, detail, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/sendTransactionByIDs?to=${to}&from=${from}&amount=${amount}&auth=${auth}&detail=${detail}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

/**
 * Gets the value of a stock ticker.
 * @function getStockValue
 * @param {string} ticker The ticker id
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a decimal).
 * @author Brendan Lane <me@imbl.me>
 */
function getStockValue(ticker, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getStockValue?ticker=${ticker}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

/**
 * Gets the history of a stock ticker.
 * @function getStockHistory
 * @param {string} ticker The ticker id
 * @param {string} type Can be "MINUTE", "HOUR", or "DAY"
 * @param {string} count How far back to go. Don't use a count over 60!
 * @param {string} interval Set the time interval beteen data points 
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be an array).
 * @author Brendan Lane <me@imbl.me>
 */
function getStockHistory(ticker, type, count, interval, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getStockHistory?ticker=${ticker}&type=${type}&count=${count}&interval=${interval}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

/**
 * Purchases Stocks
 * @function submitStockBuy
 * @param {string} ticker The ticker id
 * @param {string} count How many stocks you want to purchase
 * @param {string} price How much you want to pay for each stock
 * @param {string} accountid The SVID of the account (user or group) you'd like to purchase from.
 * @param {string} auth API Key that has authentication to use the account specified in accountid.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a tesult).
 * @author Brendan Lane <me@imbl.me>
 */
function submitStockBuy(ticker, count, price, accountid, auth, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/submitStockBuy?ticker=${ticker}&count=${count}&price=${price}&accountid=${accountid}&auth=${auth}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

/**
 * Sells Stocks
 * @function submitStockSell
 * @param {string} ticker The ticker id
 * @param {string} count How many stocks you want to sell
 * @param {string} price How much you want to sell each stock for 
 * @param {string} accountid The SVID of the account (user or group) you'd like to sell from.
 * @param {string} auth API Key that has authentication to use the account specified in accountid.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a result).
 * @author Brendan Lane <me@imbl.me>
 */
function submitStockSell(ticker, count, price, accountid, auth, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/submitStockSell?ticker=${ticker}&count=${count}&price=${price}&accountid=${accountid}&auth=${auth}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

/**
 * Cancels an ongoing order.
 * @function cancelOrder
 * @param {string} orderid The ID of the order you'd like to cancel.
 * @param {string} accountid The SVID of the account (user or group) you'd like to purchase from.
 * @param {string} auth API Key that has authentication to use the account specified in accountid.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a result).
 * @author Brendan Lane <me@imbl.me>
 */
function cancelOrder(orderid, accountid, auth, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/submitStockBuy?orderid=${orderid}&accountid=${accountid}&auth=${auth}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

/**
 * Gets the current buy price of the ticker
 * @function getStockBuyPrice
 * @param {string} ticker The ticker id
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a decimal).
 * @author Brendan Lane <me@imbl.me>
 */
function getStockBuyPrice(ticker, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getStockBuyPrice?ticker=${ticker}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

/**
 * Gets the current buy price of the ticker
 * @function getStockBuyPrice
 * @param {string} ticker The ticker id
 * @param {string} type The type of queue. Can either be "BUY" or "SELL"
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a decimal).
 * @author Brendan Lane <me@imbl.me>
 */
function getQueueInfo(ticker, type, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getQueueInfo?ticker=${ticker}&type=${type}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

/**
 * Gets stock offer data for a user.
 * @function getUserStockOffers
 * @param {string} ticker The ticker id
 * @param {string} svid The SVID of the user you want to look up
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be an array).
 * @author Brendan Lane <me@imbl.me>
 */
function getUserStockOffers(ticker, svid, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getUserStockOffers?ticker=${ticker}&svid=${svid}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

/**
 * Gets total wealth of a district
 * @function getDistrictWealth
 * @param {string} id The name of the district
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a decimal).
 * @author Brendan Lane <me@imbl.me>
 */
function getDistrictWealth(id, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getDistrictWealth?id=${id}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

/**
 * Gets total wealth of users in a district
 * @function getDistrictUserWealth
 * @param {string} id The name of the district
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a decimal).
 * @author Brendan Lane <me@imbl.me>
 */
function getDistrictUserWealth(id, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getDistrictUserWealth?id=${id}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

/**
 * Gets total wealth of groups in a district
 * @function getDistrictGroupWealth
 * @param {string} id The name of the district
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a decimal).
 * @author Brendan Lane <me@imbl.me>
 */
function getDistrictGroupWealth(id, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getDistrictGroupWealth?id=${id}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

/**
 * @function getOwnerData
 * @param {string} ticker The stock ticker you want to query
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a JSON Object).
 * @author Brendan Lane <me@imbl.me>
 */
function getOwnerData(ticker, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getOwnerData?ticker=${ticker}`)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                if (errToConsole) {
                    console.warn(error);
                } else {
                    reject(error);
                }
            });
    });
}

export default {
    getBalance,
    sendTransactionByIDs,
    getStockValue,
    getStockHistory,
    submitStockBuy,
    submitStockSell,
    cancelOrder,
    getStockBuyPrice,
    getQueueInfo,
    getUserStockOffers,
    getDistrictWealth,
    getDistrictUserWealth,
    getDistrictGroupWealth,
    getOwnerData
};
