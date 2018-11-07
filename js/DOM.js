var body = document.body;
var title = document.getElementById("title");
var paragraphs = document.getElementsByTagName("p");
//console.log(paragraphs);

var swim = paragraphs[0];
var bike = paragraphs[1];
var run = paragraphs[2];
//swim2 = document.getElementsByClassName("swim");
//walk = document.getElementsByClassName("walk");
swim = document.getElementsByClassName("swim")[0];

swim = document.querySelector(".swim");
bike = document.querySelector("#bike");
run = document.querySelector("p:last-child");
//console.log(run);

var sports = document.getElementById("sports");
console.log(sports.children);
console.log(sports.firstChild);
console.log(sports.lastChild);

var swimTextNode = swim.firstChild;
//console.log(swimTextNode);
//console.log(swimTextNode.textContent);
//console.log(run.textContent);

//console.log(sports.getAttribute("id"));

var meta = document.getElementsByTagName("meta")[0];
//console.log(meta);
//console.log(meta.getAttribute("charset"));
//console.log(swim.getAttribute("stroke"));

swim.setAttribute("class","swimming");
//console.log(swim.getAttribute("class"));
swim.setAttribute("class","swim");
//console.log(swim.getAttribute("class"));

//console.log(run.getAttribute("id"));
run.setAttribute("id","run");
//console.log(run.getAttribute("id"));

swim.className = "swimming";
//console.log(swim.className);
swim.className = "swim";

run.classList.add("run");
//console.log(swim.classList);

//console.log(swim.classList.toggle('sport'));
//console.log(swim.classList.contains('sport'));
//console.log(swim.classList.toggle('sport'));
//console.log(swim.classList.contains('sport'));

var newPara = document.createElement("p");
var text = "Transition 1"
newPara.textContent = text;


//newPara.appendChild(text);
/*
1.create element node
2.create text node
3.append text node to element node
*/

//newPara.textContent = 'Transition 1';

function createEl(tag,text){
  el = document.createElement(tag);
  el.textContent = text;
  return el;
}

var anotherPara = createEl("p","Transition 2");

//sports.appendChild(newPara);

sports.insertBefore(newPara,bike);
sports.appendChild(newPara);
sports.insertBefore(newPara,swim);
sports.removeChild(swim);
sports.insertBefore(swim,bike);


h1 = document.getElementById("title");
//console.log(h1);
oldTitle = h1.firstChild;
//console.log(oldTitle);
newTitle = document.createTextNode("Iron Man Triatholon");
//console.log(newTitle);
//h1.replaceChild(newTitle,oldTitle);

h1.innerHTML = "Biathalon";
console.log(h1.innerHTML);

//skii = document.createElement("p");
//skii.textContent = "Skiing";
//sports.appendChild(skii);
//newTitle = document.createTextNode("Skying");
//repFirst = skii.firstChild;
//skii.replaceChild(newTitle,repFirst);

//sports.innerHTML = "<p>Skiing</p><p>Shooting</p>"

var swim = document.getElementsByClassName("swim")[0];
//console.log(swim);
swim.style.border = "blue 2px solid";

var bike = document.getElementById("bike");
bike.style.backgroundColor = "green";

/*
var run = document.getElementsByTagName("p")[3];
run.style.display = "block";
run.style.display = "none";
*/

var els = document.getElementsByTagName("p");


for(i=0;i<els.length;i++){
  if(els[i].textContent == "Transition 1"){
    console.log(i);
  }
}

//sports = document.getElementById("sports");
//scount = sports.childElementCount;
//console.log("1:"+sports.firstChild+"\n2:"+sports.lastChild);

var styles = getComputedStyle(bike);
//console.log(styles.getPropertyCSSValue('color').cssText);

run.style.border = "red 3px solid";
