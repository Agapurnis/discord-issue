const client = require("..");

(async()=>{
	const myGuildId = "643703532675006474";
	const guild = await client.guilds.fetch(myGuildId);
})()