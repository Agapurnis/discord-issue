## discord-issue

An issue I spent way too long resolving.

It turns out, when I call `src/other.js` from `src/index.js`,
it must be called *after* the ready event has been fired.

Strangely, if I remove remove line 15 of `src/other.js`, the
issue is resolved, despite not changing anything/following the instructions
in the comments of `index.js`.

Either way, that error message really threw me off and I feel stupid
for not realizing what was happening earlier.

Pretty much every property from the `newVoiceState.channel` was defined,
except for anything related to sharding. Perhaps the information was
cached, but caching shard information is disabled due to how much it varies?

I honestly don't have a clue.

I'll leave this error here so if it ever pops up in someone's
search results on google, they can figure out what's wrong.

```
TypeError: Cannot read property 'send' of undefined
    at VoiceConnection.sendVoiceStateUpdate (/<trimmed>/node_modules/discord.js/src/client/voice/VoiceConnection.js:193:37)
    at VoiceConnection.authenticate (/<trimmed>/node_modules/discord.js/src/client/voice/VoiceConnection.js:323:10)
    at /<trimmed>/node_modules/discord.js/src/client/voice/ClientVoiceManager.js:88:20
```