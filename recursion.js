//recursion,  do sth repetitively until a certain condition is met, like loop

console.log("''''''''''''''''''''''  recursion ''''''''''''''''''''''''");

let counter =10;
while(counter>0) {
    console.log(counter--);
}//from 10 to 1

console.log("''''''''''''''''''''''  recursion ''''''''''''''''''''''''");

function countdown (value) {
    if(value>0) {
        console.log(value);
        return countdown(value-1);
    }else {
        return value;
    }
};
countdown(10);//same as the previous, but this recursion meth is better

console.log("''''''''''''''''''''''  recursion ''''''''''''''''''''''''");

let factorial = function(number) {
    if(number <=0) {
        return 1;
    } else {
        return (number*factorial(number-1));
    }
};
console.log(factorial(10));//the total value =3628800, 10*9+9*8+8*7...

console.log("''''''''''''''''''''''  recursion ''''''''''''''''''''''''");

let factorial1 = function(number){
    if(number<=0){
        return 1;
    }else {
        return(number*factorial1(number-1));
    }
};
console.log(factorial(5));//we ll get 120, 5*4*3*2*1(20*3, 60*2, 120*1)


console.log("_______________________ set date __________________________");

date = new Date();
date.setDate(22);
date.setMonth(06);
let remaining = date - new Date();
let result = remaining/(1000*60*60*24);
console.log(result);
 