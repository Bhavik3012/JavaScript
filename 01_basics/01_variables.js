const account_ID = 2342
let account_Email = "bhaviksongaf23@gmail.com"
var account_Password = "12345"
account_City = "Surat"
let account_State
// account_ID = 2  not allowed for const  
console.log(account_ID);

account_Email = "hello@gmail.com"
account_Password = "54321"
account_City = "London"

console.table([account_ID, account_Email, account_Password, account_City, account_State])
/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/
