const { toBlock, mapBlock, concatBlocks, toString } = require("..");

function red(s) {
  return "\u001b[31m" + s + "\u001b[0m";
}

function yellow(s) {
  return "\u001b[33m" + s + "\u001b[0m";
}

function blue(s) {
  return "\u001b[34m" + s + "\u001b[0m";
}

const hourBlock = mapBlock(toBlock("05"), red);
const minuteBlock = mapBlock(toBlock("30"), yellow);
const secondBlock = mapBlock(toBlock("12"), blue);
const sepBlock = toBlock(":");

console.log(toString(concatBlocks(
  hourBlock,
  sepBlock,
  minuteBlock,
  sepBlock,
  secondBlock
)));
