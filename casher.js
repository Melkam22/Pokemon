
let changeFunc = (given, price)=> {
givenMoney=[
    {200: 0},
    {100: 0},
    {50: 0},
    {20: 0},
    {10: 0},
    {5: 0},
    {1: 0},
    {.5: 0},
    {.20: 0},
    {.10: 0},
    {.05: 0},
    {.02: 0},
    {.01: 0}
];
let change = given-price;
for(let a=0; a<givenMoney.length; a++){
    for(let key in givenMoney[a]){
        while(change.toFixed(2)>=Number(key)){
            givenMoney[a][key]++;
            change=change.toFixed(2)-Number(key);
}
}
} 
//console.log(givenMoney);i ll get the total list
let result = givenMoney.filter(item=>{
    for(let key in item) {
        return item[key] !=0;
    }
});
console.log(result);
};
changeFunc(50, 3.75);
changeFunc(100, 27.45);

console.log(">>>>>>>>>>> casher solution 2 <<<<<<<<<<<<<<<<<<<<<<");

function changeFunc1(given, price){
    let toCustomer=[];
let myMoney=[200,100,50,20,10,10,5,2,1,.5,.2,.05,.02,.01]; 
let change= given-price;
if(given<price){
    console.log(`you should have at least ${price}€ to buy this product`);
    } else {     
for(let b=0; b<myMoney.length; b++){
        if(change>=myMoney[b]){
        let result1= Math.trunc(change/myMoney[b]);
        toCustomer.push((`${result1} x ${myMoney[b]}€`));
        change=change.toFixed(2)-myMoney[b]*result1;//to solve 0.01€ issue
             
        }
    } 
}
return toCustomer;
}
console.log(changeFunc1(30, 24.75));




