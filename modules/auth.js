// SpookVooper API - modules/Auth.js
// Written by Brendan Lane - https://brndnln.dev/

const axios = require('axios')
const authURL = 'https://spookvooper.com/oauth2'
let urlReturn;

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

module.exports = Auth
