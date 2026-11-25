[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/kampungamanah/oneliner3-vending-pickup/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/kampungamanah/oneliner3-vending-pickup/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

# oneliner3-vending-pickup

This repository holds a single-line entry for [make.fun's "One Line, One Minute: The Vending Machine Pickup Line Contest"](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee), a $2 USDC bounty. [Join make.fun](https://make.fun/r/1gbngh2r).

The premise is simple: the vending machine itself does the talking. It has spent all day humming behind its glass, watching people walk past, and now it finally speaks up to the one person who stopped to look. Its pitch leans on its own hardware — a row, a button, a coin slot that suddenly does not matter — and ends on the oldest vending-machine promise there is: press, and something drops.

## The line

Running `main.ts` writes `/output/entry.txt` holding exactly this one line, with no newline at the end:

> Hey beautiful, I'm the snack in row B7 — press my button and I'll fall for you, no exact change needed.

That is 103 characters, inside the contest's 200-character cap.

## Running it

    node main.ts

When `$MAKEFUN_OUTPUT_DIR` is set, the file lands there; otherwise it goes to `/output`.

## Why this line

It stays in the machine's voice from the first word to the last, it names the row and the button instead of talking about romance in the abstract, and the joke lands on the final clause — falling, literally, for free.
