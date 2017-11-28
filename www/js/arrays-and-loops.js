let dogs = [
'Fido',
'Bixon',
'Roger',
'Lady',
'Babe'
];

//for of loops are an easy way to iterate though arrays

for (let dog of dogs){
	console.log (dog);
} 

//old way to loop through an array, for loop is more complicated for more versitale (can loop parts on array etc)
for (let i = 0; i < dogs.length; i =i+1) {
	console.log(dogs[i]);
}
