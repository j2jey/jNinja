var superman = {
  name: "Superman",
  realName: "Clark Kent",
  height: 75,
  weight: 225,
  hero: true,
  villain: false,
  allies: ["Batman", "Wonder Woman", "Supergirl"],
  fly: function(){
    return "Up, up and away";
  }
};

console.log(superman.name+" "+superman['height']);
console.log(superman['fly']());

if ('city' in superman){
  console.log(superman['city']);
}else{
  console.log("City not in Superman");
}

console.log(superman.hasOwnProperty('name'));
