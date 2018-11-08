//var form = document.forms.search;
//var form = document.forms[0];
//var form = document.getElementsbyTagName("form")[0]
var form = document.forms["search"];
var input = form["searchBox"];
var button = form[1];
//console.log(button);

input.value = "Search here"

/* Can use placeholder attribute in HTML markup
input.addEventListener('focus',function(){
  if(input.value == "Search here"){
    input.value="";
  }
},false);

input.addEventListener('blur',function(){
  if(input.value === ""){
    input.value="Search here";
  }
},false);
*/
//input.addEventListener('focus',function(){alert("focused"),false});

//input.addEventListener('blur',function(){  alert("blurred");});

//input.addEventListener('change',function(){ alert("changed");});

form.addEventListener('submit',search,false);

function search(event){
  alert("You searched for "+input.value);
  event.preventDefault();
  //return false;
}
