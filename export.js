var dollar = require('./dollar.js');
var generate = require('./generate.js');


console.log("export");

function makeBalance(min, max) {
 var balance = dollar(generate(min,max));

  return balance;
}

function account() {

  return("Account blanace: \n");
}



module.exports = {
  makeBalance,
  account,
};
