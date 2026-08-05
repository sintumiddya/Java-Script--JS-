const accountId = 10;
let accountEmail = "test@gmail.com";
var accoutntPassword = "12345";
accountCity = "West Bengal";
let accountState;

//accountId = 2 // not allowed
accountEmail = "demo@gmail.com";
accoutntPassword = "000000";
accountCity = "kolkata";

console.log(accountId);
console.table([accountId,accountEmail,accoutntPassword,accountCity,accountState]);

/*
prefer not to use var
becouse of issue in block scop and functional scop
*/