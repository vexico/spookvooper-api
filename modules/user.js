// SpookVooper API - modules/user.js
// Written by Brendan Lane

/** @module modules/user */
import axios from "axios";

let baseURL = "https://api.spookvooper.com/user";

/**
 * Gets information on the user
 * @function getUser
 * @param {string} svid The svid for the user.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a JSON object).
 * @author Brendan Lane <me@imbl.me>
 */
function getUser(svid, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getUser?svid=${svid}`)
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
 * Gets the username of a user
 * @function getUsername
 * @param {string} svid The svid for the user lookup.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a string).
 * @author Brendan Lane <me@imbl.me>
 */
function getUsername(svid, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getUsername?svid=${svid}`)
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
 * Gets the svid of a user from their username
 * @function getSvidFromUsername
 * @param {string} username The username of the user
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a string).
 * @author Brendan Lane <me@imbl.me>
 */
function getSvidFromUsername(username, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getSvidFromUsername?username=${username}`)
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
 * Gets the username from their linked discord account
 * @function getUsernameFromDiscord
 * @param {string} discordid The discord User ID for the user account.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a string).
 * @author Brendan Lane <me@imbl.me>
 */
function getUsernameFromDiscord(discordid, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getUsernameFromDiscord?discordid=${discordid}`)
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
 * Gets the SVID of a user who has their discord account linked.
 * @function getSvidFromDiscord
 * @param {string} discordid The discord user ID
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a string).
 * @author Brendan Lane <me@imbl.me>
 */
function getSvidFromDiscord(discordid, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getSvidFromDiscord?discordid=${discordid}`)
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
 * Gets the username from the minecraft UUID.
 * @function getUsernameFromMinecraft
 * @param {string} minecraftid The UUID of the minecraft user.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a string).
 * @author Brendan Lane <me@imbl.me>
 */
function getUsernameFromMinecraft(minecraftid, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getUsernameFromMinecraft?minecraftid=${minecraftid}`)
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
 * Gets the SVID from the minecraft UUID.
 * @function getSvidFromMinecraft
 * @param {string} minecraftid The UUID of the minecraft user.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a string).
 * @author Brendan Lane <me@imbl.me>
 */
function getSvidFromMinecraft(minecraftid, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getSvidFromMinecraft?minecraftid=${minecraftid}`)
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
 * Checks if the user has a discord role
 * @function hasDiscordRole
 * @param {string} userid The SVID of the user you want to lookup
 * @param {string} role The name of the role you want to lookup.
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a boolean).
 * @author Brendan Lane <me@imbl.me>
 */
function hasDiscordRole(userid, role, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/hasDiscordRole?userid=${userid}&role=${role}`)
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
 * Gets the discord roles of a user
 * @function getDiscordRoles
 * @param {string} svid The svid of the user you want to lookup
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a JSON Object).
 * @author Brendan Lane <me@imbl.me>
 */
function getDiscordRoles(svid, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getDiscordRoles?svid=${svid}`)
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
 * Gets the days since the last move of a user
 * @function getDiscordRoles
 * @param {string} svid The svid of the user you want to lookup
 * @param {boolean} errToConsole If there is an error, send it to console, instead of returning. Defaults to false
 * @returns {string} The data from the HTTP GET request, but because of the way it's handled, will always be a string (should be a integer).
 * @author Brendan Lane <me@imbl.me>
 */
function getDaysSinceLastMove(svid, errToConsole) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}/getDaysSinceLastMove?svid=${svid}`)
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
    getUser,
    getUsername,
    getSvidFromUsername,
    getUsernameFromDiscord,
    getSvidFromDiscord,
    getUsernameFromMinecraft,
    getSvidFromMinecraft,
    hasDiscordRole,
    getDiscordRoles,
    getDaysSinceLastMove
};
