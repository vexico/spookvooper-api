// SpookVooper API - modules/ExchangeHub.js
// Written by Brendan Lane - https://brndnln.dev/

const signalR = require('@microsoft/signalr')
const EventEmitter = require('events')

class ExchangeEmitter extends EventEmitter {}

class ExchangeHub {
    #connection = new signalR.HubConnectionBuilder()
        .withUrl('https://spookvooper.com/ExchangeHub')
        .withAutomaticReconnect()
        .configureLogging(signalR.LogLevel.Information)
        .build()

    exchangeEvent = new ExchangeEmitter()

    constructor() {
        // Event Handlers
        this.#connection.on('StockOffer', (offer) => {
            this.exchangeEvent.emit('NewOffer', offer)
        })

        this.#connection.on('StockOfferCancel', (offer) => {
            this.exchangeEvent.emit('OfferCancelled', offer)
        })

        this.#connection.on('StockTrade', (trade) => {
            this.exchangeEvent.emit('StockTrade', trade)
        })

        this.#connection.on('RecieveMessage', (message, mode) => {
            this.exchangeEvent.emit('RecieveMessage', message, mode)
        })

        this.#connection.on('RecieveMessageHistory', (messages, modes) => {
            this.exchangeEvent.emit('RevieveMessageHistory', messages, modes)
        })

        // Start of connection logic
        this.#connection.onclose(async (e) => {
            await this.onClosed(e)
        })

        this.#connection.on()

        this.start()
    }

    async start() {
        console.log("Starting ExchangeHub Connection...")

        try {
            await this.#connection.start()
            console.log("Connected to ExchangeHub")
        } catch (e) {
            console.error("ExchangeHub Error: Connection failed while trying to establish a connnection\n", e)
            console.log("Retrying in 5 seconds")
            setTimeout(() => {
                this.start()
            }, 5000)
        }
    }

    async onClosed(e) {
        console.error("ExchangeHub Error: Connection closed unexpectedly\n", e)
        await this.start()
    }

    sendChatMessage(message, accountid, apikey, ticker, tradeState) {
        return new Promise((resolve, reject) => {
            if (message === undefined || accountid === undefined || apikey === undefined || ticker === undefined || tradeState === undefined) {
                throw "All variables are needed for this to work."
            }

            tradeState = tradeState.toUpperCase()
            if (tradeState !== "BUY" && tradeState !== "SELL") {
                throw "The tradeState argument must either be 'BUY' or 'SELL'";
            }

            this.#connection.invoke("SendMessage", accountid, apikey, message, ticker, tradeState)
                .then(function () {
                    resolve(true)
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    }

    getMessageHistory() {
        return new Promise((resolve, reject) => {
            this.#connection.invoke('RequestHistory')
                .then(function (val) {
                    resolve(val)
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    }
}

module.exports = ExchangeHub
