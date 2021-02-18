
var password=document.getElementById("pwd");
function check(findpage){
	if(password==="12345"&& email==="admin"){

	
	findpage();
}
	else{
	alert("wrong username or password");
	return false;
	}
}







function findpage() {
	// var searchField = $('#search').val();
	// var myExp = new RegExp(searchField, "i");
	
	$.getJSON('data.json', function(data) {
		var output="";
		$.each(data, function(key, val) {
			 
			
		 output +='<tr class="table-danger">'+'<td>'+'<input id="myCheck" type="checkbox">'+'</td>'+ '<td>'+val.title +'</td>'+'</tr>';	
				
		});
		$('#rowtask').html(output);
		
		
		
		
	});//get JSON
}



// $('#search').click(function() {
// 	// var searchField = $('#search').val();
// 	// var myExp = new RegExp(searchField, "i");
	
// 	$.getJSON('data.json', function(data) {
// 		var output="";
// 		$.each(data, function(key, val) {
			 
			
// 		 output +='<tr class="table-danger">'+'<td>'+'<input id="myCheck" type="checkbox">'+'</td>'+ '<td>'+val.title +'</td>'+'</tr>';	
				
// 		});
// 		$('#rowtask').html(output);
		
		
		
		
// 	}); //get JSON
// });


				