const promise_fs = require("fs/promises");
const discord = require("discord.js");
const path = require("path");

const client = new discord.Client();
const token = process.env.TOKEN;

client.on("ready", () => {
	console.log("Logged in.")
})

/**
 * Contains things that should persist throughout
 * the lifetime of this client, not disposable things
 * like commands.
 */
const persistantDirectory = path.join(__dirname, 'static');
async function recursiveDirRun (dir) {
	promise_fs.readdir(dir).then(async instances => {
		instances.forEach(async instance => {
			if ((await promise_fs.lstat(path.join(dir, instance))).isDirectory()) {
				// if directory
				recursiveDirRun(path.join(dir, instance))
			} else {
				// if file
				if (instance.endsWith('.js')) {
					// if ends in .ts
					require(path.join(dir, instance))
				}
			}
		})
	})
}

client.login(token)
module.exports = client;