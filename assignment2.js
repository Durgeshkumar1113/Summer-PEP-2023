var a=11 
var i=2 
flag = false;
while (i <= num / 2){
if(num % i ==0){
    flag = true
}
++i
}
if(!flag)
console.log("given number is prime number")
else
console.log("given number is not a prime number")