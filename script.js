
var password=document.getElementById("pwd");
function check(){
	if(password==="12345"&& email==="admin"){

	
	return true;
}
	else{
	alert("wrong username or password");
	return false;
	}
}







// function findpage() {
// 	// var searchField = $('#search').val();
// 	// var myExp = new RegExp(searchField, "i");
	
// 	$.getJSON('data.json', function(data) {
// 		var output="";
// 		$.each(data, function(key, val) {
			 
			
// 		 output +='<tr class="table-danger">'+'<td>'+'<input id="myCheck" type="checkbox">'+'</td>'+ '<td>'+val.title +'</td>'+'</tr>';	
				
// 		});
// 		$('#rowtask').html(output);
		
		
		
		
// 	});//get JSON
// }



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

$('#search').click(function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        // condition
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
          
            var output ="";
            output += `<thead>
                            <th>Status</th>
                            <th>Task</th>
                       </thead>`
            for(var i=0;i<response.length;i++){

                

                if(response[i].completed == true){
                    output += ` <tr>
                        <td><input type="checkbox"  id="chkbx" checked disabled></td>
                        <td style="text-decoration: line-through;">${response[i].title}</td>
                    <tr>`;
                }
                else{
                  output += 
                                 `
                                     <tr> 
                                        <td><input type="checkbox" onclick="check();"></td>    
                                        <td>${response[i].title}</td>
                                     </tr>   
                                   `;
                }
               
                
                      
            }
            document.getElementById("rowtask").innerHTML = output;
        }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    })

   
				