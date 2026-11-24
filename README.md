# One Word for Your Wi-Fi

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

Entry for the [One Word for Your Wi-Fi](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72) bounty on make.fun, by [@sausage-sosis](https://make.fun).

## The word

**Ghosting**

Home Wi-Fi doesn't just get slow — it vanishes mid-call, like a bad date
who stops replying the second you need them most. Everyone has been
ghosted by their router at the worst possible moment, and that shared
experience is exactly what makes the word funny on its own, with no
explanation needed.

## How it works

`main.ts` (Node 22) writes the single word `Ghosting` to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set).
The program validates the gate before writing: UTF-8, 1–20 characters,
a single word with no whitespace, then re-reads the file to verify
what was actually written.

## Run it

```sh
node main.ts
cat /output/entry.txt
# Ghosting
```

## Referral

Built with make.fun — try it with referral code `f4pc3mbd`.
