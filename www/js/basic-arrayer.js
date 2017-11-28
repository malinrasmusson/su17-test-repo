//declaring the variable persons assigning a new array to it containing 5 elements

let persons = [
	'Anna',
	'Pelle',
	'Erik',
	'Beata',
	'Cecilia'

];

//Read item by using bracket parenthesis and index numbers an array starts at index number 0
console.log (persons);
console.log (persons[0]);
console.log (persons[2]);

//push addsan item to the end of an array
persons.push ('Fredrik');
console.log ('persons after pushing Fredrik', persons);

//unshift ads an item to the beginning of an array
persons.unshift ('Maria');
console.log ('persons after unshifting Maria'), persons;

//pop remove an item from the end of an array (det sista item i arrayen)
let removedItem=persons.pop();
console.log ('item removed with pop', removedItem);
console.log ('persons after pop', persons);

//remove an item from the beginning of an array (shift)
removedItem= persons.shift();
console.log ('item removed with shift', removedItem);
console.log ('persons after shift', persons);