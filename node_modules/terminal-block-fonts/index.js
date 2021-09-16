var C = "█";
var E = " ";

// Arcade Font
// https://www.dafont.com/arcade-ya.font?text=0123456789%3A%3F
var BLKS = {
  "?": [
    [E, C, C, C, C, C, E],
    [C, C, E, E, E, C, C],
    [E, E, E, C, C, C, E],
    [E, E, C, C, E, E, E],
    [E, E, E, E, E, E, E],
    [E, E, C, C, E, E, E],
    [E, E, C, C, E, E, E]
  ],
  "!": [
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, E, E, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E]
  ],
  "#": [
    [E, E, E, E, E, E, E],
    [E, E, C, E, C, E, E],
    [E, C, C, C, C, C, E],
    [E, E, C, E, C, E, E],
    [E, C, C, C, C, C, E],
    [E, E, C, E, C, E, E],
    [E, E, E, E, E, E, E]
  ],
  ":": [
    [E, E, E, E, E, E, E],
    [E, E, C, C, E, E, E],
    [E, E, C, C, E, E, E],
    [E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E],
    [E, E, C, C, E, E, E],
    [E, E, C, C, E, E, E]
  ],
  "+": [
    [E, E, E, E, E, E, E],
    [E, E, E, C, E, E, E],
    [E, E, E, C, E, E, E],
    [E, C, C, C, C, C, E],
    [E, E, E, C, E, E, E],
    [E, E, E, C, E, E, E],
    [E, E, E, E, E, E, E]
  ],
  "-": [
    [E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E],
    [E, C, C, C, C, C, E],
    [E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E]
  ],
  "*": [
    [E, E, E, E, E, E, E],
    [E, E, E, C, E, E, E],
    [E, C, E, C, E, C, E],
    [E, E, C, C, C, E, E],
    [E, C, E, C, E, C, E],
    [E, E, E, C, E, E, E],
    [E, E, E, E, E, E, E]
  ],
  "/": [
    [E, E, E, E, E, E, C],
    [E, E, E, E, E, C, E],
    [E, E, E, E, C, E, E],
    [E, E, E, C, E, E, E],
    [E, E, C, E, E, E, E],
    [E, C, E, E, E, E, E],
    [C, E, E, E, E, E, E]
  ],
  "=": [
    [E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E],
    [E, C, C, C, C, C, E],
    [E, E, E, E, E, E, E],
    [E, C, C, C, C, C, E],
    [E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E]
  ],
  " ": [
    [E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E],
    [E, E, E, E, E, E, E]
  ],
  0: [
    [E, E, C, C, C, E, E],
    [E, C, E, E, C, C, E],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [E, C, C, E, E, C, E],
    [E, E, C, C, C, E, E]
  ],
  1: [
    [E, E, E, C, C, E, E],
    [E, E, C, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, C, C, C, C, C, C]
  ],
  2: [
    [E, C, C, C, C, C, E],
    [C, C, E, E, E, C, C],
    [E, E, E, E, C, C, C],
    [E, E, C, C, C, C, E],
    [E, C, C, C, C, E, E],
    [C, C, C, E, E, E, E],
    [C, C, C, C, C, C, C]
  ],
  3: [
    [E, C, C, C, C, C, C],
    [E, E, E, E, C, C, E],
    [E, E, E, C, C, E, E],
    [E, E, C, C, C, C, E],
    [E, E, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [E, C, C, C, C, C, E]
  ],
  4: [
    [E, E, E, C, C, C, E],
    [E, E, C, C, C, C, E],
    [E, C, C, E, C, C, E],
    [C, C, E, E, C, C, E],
    [C, C, C, C, C, C, C],
    [E, E, E, E, C, C, E],
    [E, E, E, E, C, C, E]
  ],
  5: [
    [C, C, C, C, C, C, E],
    [C, C, E, E, E, E, E],
    [C, C, C, C, C, C, E],
    [E, E, E, E, E, C, C],
    [E, E, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [E, C, C, C, C, C, E]
  ],
  6: [
    [E, E, C, C, C, C, E],
    [E, C, C, E, E, E, E],
    [C, C, E, E, E, E, E],
    [C, C, C, C, C, C, E],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [E, C, C, C, C, C, E]
  ],
  7: [
    [C, C, C, C, C, C, C],
    [C, C, E, E, E, C, C],
    [E, E, E, E, C, C, E],
    [E, E, E, C, C, E, E],
    [E, E, C, C, E, E, E],
    [E, E, C, C, E, E, E],
    [E, E, C, C, E, E, E]
  ],
  8: [
    [E, C, C, C, C, E, E],
    [C, C, E, E, E, C, E],
    [C, C, C, E, E, C, E],
    [E, C, C, C, C, E, E],
    [C, E, E, C, C, C, C],
    [C, E, E, E, E, C, C],
    [E, C, C, C, C, C, E]
  ],
  9: [
    [E, C, C, C, C, C, E],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [E, C, C, C, C, C, C],
    [E, E, E, E, E, C, C],
    [E, E, E, E, C, C, E],
    [E, C, C, C, C, E, E]
  ],
  A: [
    [E, E, C, C, C, E, E],
    [E, C, C, E, C, C, E],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, C, C, C, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C]
  ],
  B: [
    [C, C, C, C, C, C, E],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, C, C, C, C, E],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, C, C, C, C, E]
  ],
  C: [
    [E, E, C, C, C, C, E],
    [E, C, C, E, E, C, C],
    [C, C, E, E, E, E, E],
    [C, C, E, E, E, E, E],
    [C, C, E, E, E, E, E],
    [E, C, C, E, E, C, C],
    [E, E, C, C, C, C, E]
  ],
  D: [
    [C, C, C, C, C, E, E],
    [C, C, E, E, C, C, E],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, C, C, E],
    [C, C, C, C, C, E, E]
  ],
  E: [
    [C, C, C, C, C, C, C],
    [C, C, E, E, E, E, E],
    [C, C, E, E, E, E, E],
    [C, C, C, C, C, C, E],
    [C, C, E, E, E, E, E],
    [C, C, E, E, E, E, E],
    [C, C, C, C, C, C, C]
  ],
  F: [
    [C, C, C, C, C, C, C],
    [C, C, E, E, E, E, E],
    [C, C, E, E, E, E, E],
    [C, C, C, C, C, C, E],
    [C, C, E, E, E, E, E],
    [C, C, E, E, E, E, E],
    [C, C, E, E, E, E, E]
  ],
  G: [
    [E, E, C, C, C, C, C],
    [E, C, C, E, E, E, E],
    [C, C, E, E, E, E, E],
    [C, C, E, E, C, C, C],
    [C, C, E, E, E, C, C],
    [E, C, C, E, E, C, C],
    [E, E, C, C, C, C, C]
  ],
  H: [
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, C, C, C, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C]
  ],
  I: [
    [E, C, C, C, C, C, C],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, C, C, C, C, C, C]
  ],
  J: [
    [E, E, E, E, E, C, C],
    [E, E, E, E, E, C, C],
    [E, E, E, E, E, C, C],
    [E, E, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [E, C, C, C, C, C, E]
  ],
  K: [
    [C, C, E, E, E, C, C],
    [C, C, E, E, C, C, E],
    [C, C, E, C, C, E, E],
    [C, C, C, C, E, E, E],
    [C, C, C, C, C, E, E],
    [C, C, E, C, C, C, E],
    [C, C, E, E, C, C, C]
  ],
  L: [
    [C, C, E, E, E, E, E],
    [C, C, E, E, E, E, E],
    [C, C, E, E, E, E, E],
    [C, C, E, E, E, E, E],
    [C, C, E, E, E, E, E],
    [C, C, E, E, E, E, E],
    [C, C, C, C, C, C, C]
  ],
  M: [
    [C, C, E, E, E, C, C],
    [C, C, C, E, C, C, C],
    [C, C, C, C, C, C, C],
    [C, C, C, C, C, C, C],
    [C, C, E, C, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C]
  ],
  N: [
    [C, C, E, E, E, C, C],
    [C, C, C, E, E, C, C],
    [C, C, C, C, E, C, C],
    [C, C, C, C, C, C, C],
    [C, C, E, C, C, C, C],
    [C, C, E, E, C, C, C],
    [C, C, E, E, E, C, C]
  ],
  O: [
    [E, C, C, C, C, C, E],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [E, C, C, C, C, C, E]
  ],
  P: [
    [C, C, C, C, C, C, E],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, C, C, C, C, E],
    [C, C, E, E, E, E, E],
    [C, C, E, E, E, E, E]
  ],
  Q: [
    [E, C, C, C, C, C, E],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, C, C, C, C],
    [C, C, E, E, C, C, E],
    [E, C, C, C, C, E, C]
  ],
  R: [
    [C, C, C, C, C, C, E],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, C, C, C],
    [C, C, C, C, C, E, E],
    [C, C, E, C, C, C, E],
    [C, C, E, E, C, C, C]
  ],
  S: [
    [E, C, C, C, C, E, E],
    [C, C, E, E, C, C, E],
    [C, C, E, E, E, E, E],
    [E, C, C, C, C, C, E],
    [E, E, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [E, C, C, C, C, C, E]
  ],
  T: [
    [E, C, C, C, C, C, C],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E]
  ],
  U: [
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [E, C, C, C, C, C, E]
  ],
  V: [
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, C, E, C, C, C],
    [E, C, C, C, C, C, E],
    [E, E, C, C, C, E, E],
    [E, E, E, C, E, E, E]
  ],
  W: [
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, E, E, C, C],
    [C, C, E, C, E, C, C],
    [C, C, C, C, C, C, C],
    [C, C, C, E, C, C, C],
    [C, C, E, E, E, C, C]
  ],
  X: [
    [C, C, E, E, E, C, C],
    [C, C, C, E, C, C, C],
    [E, C, C, C, C, C, E],
    [E, E, C, C, C, E, E],
    [E, C, C, C, C, C, E],
    [C, C, C, E, C, C, C],
    [C, C, E, E, E, C, C]
  ],
  Y: [
    [E, C, C, E, E, C, C],
    [E, C, C, E, E, C, C],
    [E, C, C, E, E, C, C],
    [E, E, C, C, C, C, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E],
    [E, E, E, C, C, E, E]
  ],
  Z: [
    [C, C, C, C, C, C, C],
    [E, E, E, E, C, C, C],
    [E, E, E, C, C, C, E],
    [E, E, C, C, C, E, E],
    [E, C, C, C, E, E, E],
    [C, C, C, E, E, E, E],
    [C, C, C, C, C, C, C]
  ]
};

const EMPTY_BLOCK = [ [], [], [], [], [], [], [] ];

function concatBlock(block1, block2) {
  var result = [];

  block1.forEach(function(line, idx) {
    result.push(line.concat([]));
  });

  block2.forEach(function(line, idx) {
    result[idx] = result[idx].concat([E]).concat(line);
  });

  return result;
}

function concatBlocks(...blocks) {
  if (blocks.length === 0) {
    return EMPTY_BLOCK;
  }

  var result = blocks[0];

  for (var i = 1; i < blocks.length; i ++) {
    result = concatBlock(result, blocks[i]);
  }

  return result;
}

function getCharBlock(c) {
  return BLKS[c.toUpperCase()] || BLKS["?"];
}

function toBlock(str) {
  var result = getCharBlock(str.charAt(0));

  for (var i = 1; i < str.length; i++) {
    result = concatBlock(result, getCharBlock(str.charAt(i)));
  }

  return result;
}

function mapBlock(block, mapper) {
  return block
    .map(function(line) {
      return line.map(function(char) {
        return mapper(char);
      })
    });
}

function toString(block) {
  return block
    .reduce(function(acc, line) {
      return acc.concat([line.join("")]);
    }, [])
    .join("\n");
}

function toBlockString(str) {
  return toString(toBlock(str));
}

module.exports = {
  concatBlocks: concatBlocks,
  toBlock: toBlock,
  mapBlock: mapBlock,
  toString: toString,
  toBlockString: toBlockString
};
