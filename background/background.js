const options = require("./options");
const ws = require("nodejs-websocket");
const axios = require("axios");

ws.createServer(function(conn) {
    conn.on("text", function(data) {

    });
    conn.on("close", console.log);
});

const websiteURL = "https://google.com"; // github pages later
const apiToken = "ata5pv7jjmmz3d863xvtmuxkdsqqkn";

async function sendNotification(message) {
    var webhookURL = `https://api.pushover.net/1/messages.json`;
    var response = await axios.post(webhookURL, {
        user: options.userKey,
        token: apiToken,
        message: message,
        title: "Laundry",
        url: websiteURL,
        url_title: "Laundry Website"
    });
}

function main() {
    sendNotification("hi 2");
}
//main();