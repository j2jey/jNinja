function doSomething(event){
    console.log(event.which);
  }

//addEventListener("click",doSomething);

var click = document.getElementById("click");
click.addEventListener("mouseup",function(){
  console.log("UP");
});
click.addEventListener("mousedown",function(){
  console.log("DOWN");
});
click.addEventListener("click",function(){
  console.log("Click");
});

var dblclick = document.getElementById("dblclick");
dblclick.addEventListener("dblclick",highlight);

var mouse = document.getElementById("mouse");
mouse.addEventListener("mouseover",highlight);
mouse.addEventListener("mouseout",highlight);

function highlight(event){
  event.target.classList.toggle("highlight");
}

//addEventListener("keydown",highlight);
/*addEventListener("keyup",function(){
  var dt = new Date();
  console.log("The key was pressed at "+dt);
});
*/
addEventListener("keydown",function(event){
  if(event.keyCode == 32 && event.ctrlKey)
    console.log("Action cancelled");
});

addEventListener("click", function(event){
  if(event.shiftKey)
    console.log("A Shifty Click!");
});

/*
addEventListener("touchend", function(){
  alert("Thank you!");
});
*/

var once = document.getElementById("once");
once.addEventListener("click",remove);

function remove(event){
  console.log("Enjoy it while it lasts");
  once.style.backgroundColor = "pink";
  once.removeEventListener("click",remove);
}

var broken = document.getElementById("broken");
broken.addEventListener("click", function(event){
  event.preventDefault();
  console.log("Broken Link!");
});

var ul = document.getElementById("list");
var li = document.querySelector("#list li");

ul.addEventListener("click", function(event){
  console.log("Clicked on ul");
},true);

li.addEventListener("click", function(event){
  console.log("Clicked on li");
  //event.stopPropagation();
},false);

ul.addEventListener("click",highlight);
