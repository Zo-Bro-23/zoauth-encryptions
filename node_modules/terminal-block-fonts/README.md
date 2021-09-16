# Terminal Block Fonts

Big fonts for terminal display. Each character is a block formed by many dots.

The font data came from [Arcade](https://www.dafont.com/arcade-ya.font), font copy rights belongs to the original author.

## Install

```
npm install --save terminal-block-fonts
```

## Usage

### Generate block string directly

```
const { toBlockString } = require("terminal-block-fonts");

console.log(toBlockString("05:30:12 AM"));
```

### Generate blocks and manipulate them

```
const { toBlock, mapBlock, concatBlocks, toString } = require("terminal-block-fonts");
const { red, yellow, blue } = require("chalk");

const hourBlock = toBlock("05");
const minuteBlock = toBlock("30");
const secondBlock = toBlock("12");
const sepBlock = toBlock(":");

console.log(toString(concatBlocks(
  mapBlock(hourBlock, red),
  sepBlock,
  mapBlock(minuteBlock, yellow),
  sepBlock,
  mapBlock(secondBlock, blue)
)));
```
