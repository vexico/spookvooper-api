// SpookVooper API - modules/Stock.js
// Written by Brendan Lane - https://brndnln.dev/

const axios = require('axios');
const ecoURL = 'https://api.spookvooper.com/eco'

class Stock {
    constructor(ticker) {
        this.ticker = ticker.toUpperCase();
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

module.exports = Stock