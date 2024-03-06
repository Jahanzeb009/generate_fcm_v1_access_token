const { JWT } = require('google-auth-library');
var { google } = require('googleapis');

var MESSAGING_SCOPE = "https://www.googleapis.com/auth/firebase.messaging";
var SCOPES = [MESSAGING_SCOPE];


var http = require('http');

function getAccessToken() {
    return new Promise((resolve, reject) => {

        var key = require('./service-account.json');
        var jwtClient = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            SCOPES,
            null
        );
        jwtClient.authorize((err, token) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(token.access_token);
        })
    })
}

getAccessToken().then((accessToken) => {
    console.log(accessToken)
})