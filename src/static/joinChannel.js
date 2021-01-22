const client = require("..");

(async()=>{
	/** I go here when I'm lonely, so whenever I join, the bot will join! */
	const myFavoriteChannel = "643703533241106435";

	client.on("voiceStateUpdate", async (_old, newVoiceState) => {
		if (newVoiceState.channelID !== myFavoriteChannel) return;
		await newVoiceState.channel.join();
	})
})();