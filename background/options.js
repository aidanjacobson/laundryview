const fs = require("fs");
function getOptionsData() {
    const data = getFileAsJSON("../options.json");
    return data;
}

function main() {
    var options = {};
    const data = getOptionsData();
    options.roomURL = data.roomURL;
    const urlFormat = /https:\/\/www.laundryview.com\/home\/(?<schoolDescKey>\d+)\/(?<location>\d+)\/.+?\/.+?/;
    const result = data.roomURL.match(urlFormat);
    options.schoolDescKey = result.groups.schoolDescKey;
    options.location = result.groups.location;
    options.apiURL = `https://www.laundryview.com/api/currentRoomData?school_desc_key=${options.schoolDescKey}&location=${options.location}`;
    options.userKey = data.userKey;
    module.exports = options;
}

main();

function getFileAsJSON(file) {
    return JSON.parse(fs.readFileSync(file));
}