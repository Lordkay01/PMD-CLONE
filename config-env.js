const envv2 = require('./config-v2')
var GITHUB_TOKEN;
var BOT_NUMBER;
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()
if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_TOKEN = process.env.GITHUB_AUTH_TOKEN
}else{
GITHUB_TOKEN = envv2.GITHUB_AUTH_TOKEN
}
if(process.env.BOT_NUMBER){
BOT_NUMBER = process.env.BOT_NUMBER
}else{
BOT_NUMBER = envv2.BOT_NUMBER
}




module.exports = {
    SESSION_ID:  process.env.SESSION_ID = "PRABATH-MD~Kfo3RB6L#IbSxrggqiKjHOYDtLR2jFte-8zixqwaPhXfpjdKzBC0"   
    BOT_NUMBER:  BOT_NUMBER = "2347045505096
    GITHUB_USERNAME: username = "lordkay01
    GITHUB_AUTH_TOKEN: GITHUB_TOKEN = "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"
};
