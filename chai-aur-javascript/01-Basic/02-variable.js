const accountId = 14453;
let accountEmail = "namaste@gmail.com"
var accountPassword = "Namaste@123";
accountCity = "Rishikesh";
let accountState;

// accountId = 15015; //TypeError: Assignment to constant variable.
accountEmail = "narayan@dev.com"
accountPassword = "Narayan@123";
accountCity = "Dehradun";

// console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);