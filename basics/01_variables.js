const accountId = 144553
let accountEmail = "surajkuma@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2  //not allowed becoz const can't be change after declearation
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "delhi"

/*
  prefer not to use var 
  because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])   //to print all variable in table form