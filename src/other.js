const client = require('.');

(async()=>{
	const myFavoriteChannel = "643703533241106435";

	client.on("voiceStateUpdate", async (_old, newVoiceState) => {
		if(newVoiceState.channelID !== myFavoriteChannel) return;
		await newVoiceState.channel.join();
	});
})();

(async()=>{
	const myGuildId = "643703532675006474"; 
	const guild = await client.guilds.fetch(myGuildId);
})();