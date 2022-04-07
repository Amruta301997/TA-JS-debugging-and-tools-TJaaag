//1.

function fullname(firstName,lastName){
    return firstName +" "+ lastName;
}
let result=fullname("arya","stark");
let expected= "arya s";
if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}

result="arya stark";


//2.
function tax(amount,taxRate){
  let totalAmount= amount + (amount * taxRate);
  return totalAmount;
}
let taxResult=tax(20000,5);
let taxExpected= 125000;
if(result !== expected){
    throw new Error(`${taxResult} is not equal to ${taxExpected}`);
}

taxResult=120000;