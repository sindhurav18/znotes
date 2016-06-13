$(document).ready(function(){



	var items = getFromLocal('notes');
	var index;
	loadList(items);
	// if input is empty disable button
	$('#newTask').prop('disabled', true);
	$('#editSave').prop('disabled', true);
	$('input').keyup(function(){
		if($(this).val().length !== 0) {
			$('#newTask').prop('disabled', false);
			$('#editSave').prop('disabled', false);
		} else {
			$('#newTask').prop('disabled', true);
			$('#editSave').prop('disabled', true);
		}
	});
	// bind input enter with button submit
	$('#main-input').keypress(function(e){
		if(e.which === 13) {
			if ($('#main-input').val().length !== 0)
				$('#newTask').click();
		}
	});
	$('#newTask').click(function(){
		// var value = $('#main-input').val();
		var value = document.getElementById('main-input').value;
		console.log(value);
		items.push(value);
		//console.log(items[0]);
		$('#main-input').val('');
		
		loadList(items);
		storeToLocal('notes', items);
		// set button to 
		$('#editSave').prop('disabled', true);

	});


//sindhu
// 	// delete one item
// 	//$('ul').delegate("span", "click", function(event){
	 $('ul').delegate('span', "click", function(event){
		event.stopPropagation();
		index = $('span').index(this);

		alert(index);
		$('li').eq(index).remove();
		items.splice(index, 1);
		storeToLocal('notes', items);
		
	});

// 	// edit panel
	$('ul').delegate('div', "click", function(event){
       // event.stopPropagation();
		index = $('div').index(this);
	

	alert(index);
	
		//var content = items[index-2];
		var content = items[index-6];
		alert(content);
		
		$('#editNotes').val(content );



		$('#editSave').click(function(){
		//items[index-2] = $('#editNotes').val();
		alert("after editsave");
		items[index-6] = $('#editNotes').val();
		loadList(items);
		storeToLocal("notes", items);
		$('#newTask').prop('disabled', true);
	});

});

	 
	$('#search').click(function(){
    var value = document.getElementById('stext').value;
    alert(value);
    if(items.length > 0) {
 			for(var i = 0; i < items.length; i++) {

 				if(items[i]==value)
 				{
 					alert(items[i]);
 			
 				}
 				else
 				{
 					alert("not found!");
 				}
 			}
 		}

	});
// 	// loadList
// 	function loadList(items){
// 		 $('li').remove(); //to clear the existing li value from the list
// 		if(items.length > 0) {
// 			for(var i = 0; i < items.length; i++) {
// // $('ul').append('<li class= "list-group-item" data-toggle="modal" data-target="#editModal">' + items[i] + '<span id="remove" class="glyphicon glyphicon-remove "></span>'
// // 				  	+'&nbsp'+'<div id="edit" class="glyphicon glyphicon-edit "></div></li>');
		


// 				  $('ul').append('<li class= "list-group-item" data-toggle="modal">' + items[i] + '<span id="remove" class="glyphicon glyphicon-remove "></span>'
// 				  	+'&nbsp'+'<div id="edit" class="glyphicon glyphicon-edit "></div></li>');
// 			}
// 		}
// 	}; sindhu

function loadList(items){
$('li').remove(); 
if(items.length > 0) {
 			for(var i = 0; i < items.length; i++) {

 				// $('ul').append('<li class= "list-group-item" >' + items[i] + '<span id="remove" class="glyphicon glyphicon-remove "></span>'
				 //  	+'&nbsp'+'<div id="edit" class="glyphicon glyphicon-edit "></div></li>');
		
$('ul').append('<li class= "list-group-item" style:"position: fixed;">' + items[i] + '<span id="remove" class="glyphicon glyphicon-remove "></span>'
				  	+'&nbsp'+'<div id="edit" class="glyphicon glyphicon-edit" data-toggle="modal" data-target="#editModal"></div></li>');

}
}
};




	function storeToLocal(key, items){
		localStorage[key] = JSON.stringify(items);
	}

	function getFromLocal(key){
		if(localStorage[key])
			return JSON.parse(localStorage[key]);
		else 
			return [];
	}

});






 // $("#datepicker").datepicker();



// var counter = 1;

// function enter_task () {
//         var text = $('#main-input').val();
//         $('ul').append('<li><span>'+ text + ' </span><input type="submit" id="edit' + counter + '" value="Edit">' + '<input type="submit" class="done" id="delete' + counter + '" value="Delete">' +'</li>');
  
// $('#edit' + counter).click(function(){
// 	alert(counter);
//     $(this).prev().attr('contenteditable','true');
//     $(this).prev().focus();
// });

// $('#delete' + counter).click(function(){
//     $(this).parent().remove();
// });

//   counter++;
// };

// $(function() {
//     $('#newTask').on('click', enter_task);
// });

