// SpookVooper API - modules/TransactionHub.js
// Written by Brendan Lane - https://brndnln.dev/

const signalR = require('@microsoft/signalr')
const EventEmitter = require('events')

class TransactionEmitter extends EventEmitter {}

class TransactionHub {
    #connection = new signalR.HubConnectionBuilder()
        .withUrl('https://spookvooper.com/TransactionHub')
        .withAutomaticReconnect()
        .configureLogging(signalR.LogLevel.Information)
        .build();

    transactionEvent = new TransactionEmitter()

    #val = undefined;

    fromAccount = undefined
    toAccount = undefined

    constructor() {
        // Event Handlers
        this.#connection.on('NotifyTransaction', (recieved) => {
            this.#val = JSON.parse(recieved);
            this.fromAccount = this.#val.FromAccount;
            this.toAccount = this.#val.ToAccount;

            this.transactionEvent.emit('NewTransaction', recieved);
        })

        // Start connection logic
        this.#connection.onclose(async (e) => {
            await this.onClosed(e)
        });

        this.#connection.on();

        this.start();
    }

    async start() {
        console.log("Starting TransactionHub Connection...");

        try {
            await this.#connection.start();
            console.log("Connected to TransactionHub");
        } catch (e) {
            console.error("TransactionHub Error: Connection failed while trying to establish a connection\n", e)
            console.log("Retrying in 5 seconds")
            setTimeout(() => {
                this.start();
            }, 5000);
        }

    }

    async onClosed(e) {
        console.error("TransactionHub Error: Connection closed unexpectedly\n", e);
        await this.start();
    }
}

module.exports = TransactionHub
