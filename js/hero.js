var form = document.forms.hero;

form.addEventListener('submit',makeHero,false);

form.name.addEventListener('blur',validateInLine,false);
function validateInLine(event){
  var firstLetter = form.name.value[0];
  var label = document.querySelector("label[for='name']");
  if (firstLetter.toUpperCase("X")){
    label.classList.add("error");
    label.textContent = "Your name is not allowedto start with X!";
  }else{
    label.classList.remove("error");
    label.textContent = "Name"
  }
}

form.addEventListener('submit',validate,false);
function validate(event){
  var firstletter = form.name.value[0];
  if (firstletter.toLowerCase() === "x"){
    event.preventDefault();
    alert("Your name is not allowed to start with X!");
  }
}

//form.powers[0].checked = true;
function makeHero(event){
  event.preventDefault();
  var hero = {};
  hero.name = form.name.value;
  hero.realName = form.realName.value;
  //hero.powers = form.powers;
  hero.powers = [];
  for(var i=0;i<form.powers.length;i++){
    if(form.powers[i].checked){
      hero.powers.push(form.powers[i].value);
    }
  }

  for(var i=0;i<form.type.length;i++){
    if(form.type[i].checked){
      hero.type = form.type[i].value;
      break;
    }
  }

  hero.age = form.age.value;
  hero.city = form.city.value;
  hero.origin = form.origin.value;

  alert(JSON.stringify(hero));
}
