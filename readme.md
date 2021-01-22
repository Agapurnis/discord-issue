## discord-issue

An issue I spent way too long resolving.

It turns out, when I call `src/other.js` from `src/index.js`,
it must be called *after* the ready event has been fired.

Strangely, if I remove remove line 15 of `src/other.js`, the
issue is resolved, despite not changing anything/following the instructions
in the comments of `index.js`.

Either way, that error message really threw me off and I feel stupid
for not realizing what was happening earlier.