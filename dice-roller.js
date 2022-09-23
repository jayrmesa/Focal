const randomNum = function(num) {
  return Math.floor(Math.random() * num);
};

const diceRoll = function (rolls, dieSides = 6){
  let dice = [];

  for (let i = 0; i < rolls; i++){
    dice.push(randomNum(dieSides));
  }
  console.log(`Rolled ${rolls} dice: ${dice.join(', ')}`);
};

diceRoll(process.argv[2]);