/*
Math.random() * 6;
for (var i = 0; i < 100; i++) {
  console.log(Math.random() * 6);
}
/*
/*
for (var i = 0; i < 100; i++) {
  console.log(Math.floor(Math.random() * 6));
}
*/

/*for (var i = 0; i < 100; i++) {
  console.log(Math.floor(Math.random() * 6) + 1);
}
*/

/* function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

for (var i = 0; i < 100; i++) {
  console.log(rollDice());
}
*/

function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

console.log("hello world");
