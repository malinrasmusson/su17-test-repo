//datatypes


//strings (strängar)

let greeting = 'Hello there!';

console. log (greeting);

//strings, version 2 (ger samma effekt som med ett citattecken)

let bye = "Bye for now";
console. log (bye);

//we can add strings together (concatenation)

let allIHaveToSay = greeting + ' ' + bye;
console. log (allIHaveToSay);



//numbers (can be both integers (heltal) and decimal numbers)
let numberOfBeersBar1 = 2;
let numberOfBeersBar2 = 1;
let totalNumberOfBeers = numberOfBeersBar1 + numberOfBeersBar2;
console.log (totalNumberOfBeers);


//Booleans

let thirsty = true;
let hungry = false; 

//&& = and (logical operator) båda sakerna måste vara sanna
let thirstyAndHungry = thirsty && hungry;

//|| = or (logical operator) något av alternativen måste vara sanna
let thirstyOrHungry = thirsty || hungry;

console.log ('thirsty', thirsty);
console.log ('hungry', hungry);
console.log ('thirstyAndHungry', thirstyAndHungry);
console.log ('thirstyOrHungry', thirstyOrHungry);

let savedMoney = 4000;
let debts = 4000;

//comparing two values using: >, <, >=, <=, ==, != one of theese operators always return a boolean

let happy = savedMoney >= debts;
let equalMoneyAndDebts = savedMoney == debts;

console.log ('happy', happy);
console.log ('equalMoneyAndDebts', equalMoneyAndDebts);


