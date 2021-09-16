const { toBlockString } = require("..");

console.log(toBlockString("ABCDEFG") + "\n");
console.log(toBlockString("HIJKLMN") + "\n");
console.log(toBlockString("OPQ RST") + "\n");
console.log(toBlockString("UVW XYZ") + "\n");
console.log(toBlockString("0123456789") + "\n");
console.log(toBlockString("+-*/=") + "\n");
console.log(toBlockString(":?!# "));
