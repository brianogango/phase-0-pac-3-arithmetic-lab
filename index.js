a = 10;
b = 5;

add();
function add(a,b){
return(a+b);
}
subtract();
function subtract(a,b){
    return (a-b);
}
multiply();
function multiply(a,b){
return (a*b);
}
divide();
function divide(a,b){
    return(a/b);
}
inrement();
function increment(n){
    return(++n);
}
decrement();
function decrement(n){
    return(--n)
}

function makeInt(string){
  return parseInt(string,10)
}
function preserveDecimal(string){
  return parseFloat(string)
}