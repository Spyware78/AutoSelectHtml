
alert("Search script is working");

//Here is the id of the select that we want to fetch
function changeMyMind(id){
	
	try{
	
	const fieldToChange = document.getElementById(id);
	
	if(!fieldToChange || fieldToChange == null ){
		throw new Error(`Select field with id not found: ${id}` );
	}
	
	const newInputSearch = document.createElement("input");
	newInputSearch.id = "field_search";
	newInputSearch.type = "text";

	const labelInputSearch = document.createElement("label");
	labelInputSearch.for = "newInputSearch";
	labelInputSearch.innerText = "Pesquisa: ";

	const div_search = document.createElement("div");
	div_search.style="margin:0px;padding:0px;";
	div_search.appendChild(labelInputSearch);
	div_search.appendChild(newInputSearch);			
			
	//Here we are adding the search box under the select
	fieldToChange.parentElement.appendChild(div_search);		

	const list_fields_select = [];
	const fields_select = fieldToChange.options;

	for(var i of fields_select){ 	
		list_fields_select.push(i.innerText.replace(/\d+\s/g,"").normalize("NFD").replace(/[\u0300-\u036f]|\u0327/g, ""));
	}

	const field_search = document.getElementById("field_search");

	field_search.addEventListener("keyup",(evt)=>{
		
		const text_field = field_search.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]|\u0327/g, "");
			
			for(var i of list_fields_select){			
				
				if(text_field.length == i.length && text_field == i.toLowerCase()){
					const position = list_fields_select.indexOf(i);
					fieldToChange.selectedIndex = position;
					return
				}
					
			}		
		
		
		if(text_field.length == 3){
			
			for(var i of list_fields_select){	
				if(i.substring(0,3).toLowerCase() == text_field){	
					const position = list_fields_select.indexOf(i);
					fieldToChange.selectedIndex = position;
					break
				}
			}
			
		}else if(text_field.length == 2){
			
			for(var i of list_fields_select){
					if(i.substring(0,2).toLowerCase() == text_field){
						const position = list_fields_select.indexOf(i);
						fieldToChange.selectedIndex = position;
						break
					}
				}
				
		}else if(text_field.length == 1){
			
			for(var i of list_fields_select){
					if(i.substring(0,1).toLowerCase() == text_field){
						const position = list_fields_select.indexOf(i);
						fieldToChange.selectedIndex = position;
						break
					}
				}
				
		}else if(text_field.length >= 4){
			
			for(var i of list_fields_select){
					if(i.substring(0,text_field.length).toLowerCase() == text_field){
						const position = list_fields_select.indexOf(i);
						fieldToChange.selectedIndex = position;
						break
					}
				}
		}	

	})
	
	
	}catch(err){
		alert(err.toString());
	}
}



/* by Nilton Junior - nilton_s.jr */	