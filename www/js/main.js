//övning

//Step1
let todoList = [
'Städa',
'Köpa Lampa till badrum',
'Fixa porttelefonlistan till Vaktis',
'Köpa Julklappar',
'Träna',
'Baka',
'Sov'
];

addToList(10);
addToList('hej');
renderList();
// Step 2
function addToList(item){
  
// push adds an item last in an array
 todoList.push(item);
 return todoList;
}

//Step 3
$('#add-first').click(function(){
	todoList.unshift($('#new-dog').val());
	$('#new-dog').val('');
	renderList();
});

//Step 4

$('#remove-last').click(function(){
	todoList.pop();
	renderList();

});

//step 5

renderList();

$('#remove-first').click(function(){
	todoList.shift();
	renderList();
});

//step 6

$('#removefromlistbynumber').click(function() {
	let index = $('#removebynumber').val() / 1;
	removefromlistbynumber(index);
	renderList();
});

//step 7

$('#removefromlistbyname').click(function() {
	let name = $('#removename').val();
	let index = todoList.indexOf(name);
	removefromlistbynumber(index);
	renderList();
});

//step 8






function removefromlistbynumber (index){
	if (index>=0){
		todoList.splice(index, 1);
	}

}


//for of loops are an easy way to iterate though arrays

	function renderList(){
		$('.todoList').empty();
	for (let todo of todoList){
		$('.todoList').append(`
			<li class="list-group-item">
			${todo}
			</li>
		`);
	} 

}






$('#add-last').click(function(){
	todoList.push($('#new-dog').val());
	$('#new-dog').val('');
	renderList();
});