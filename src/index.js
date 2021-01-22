const discord = require("discord.js");

const client = new discord.Client();
const token = process.env.TOKEN;

client.login(token)
module.exports = client;

client.on("ready", () => {
	console.log("Logged in.");
	// require('./other')
	// ^^ fixes the issue
});

// vv comment out
require('./other')