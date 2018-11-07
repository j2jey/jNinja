//var d = 1;
console.log(add(2,3));

function add(x,y){
  return x+y;
}



subtract = function(x,y){
  return x-y;
};
console.log(subtract(3,2));

/*
function subtract(x,y){
  return x-y;
}*/

//callback

function pizza(topping, callback){
  console.log("This is a "+ topping + " pizza");
  callback();
}

function cook(){
  console.log("The pizza is cooking");
}

function eat(){
  console.log("I've eaten the pizza");
}

/*
pizza("Pineapple", eat);
pizza("Ham and Egg", function(){ console.log("I've delivered the pizza");});
*/

//array sort
/*
console.log([1,20,14,12,25,66,7,4]);
console.log([1,20,14,12,25,66,7,4].sort());
console.log([1,20,14,12,25,66,7,4].sort(numSort));
*/

function numSort(a,b){
  if(a<b){
    return -1;
  }else if(a>b){
    return 1;
  }else{
    return 0;
  }
}

function square(a){
  return a*a;
}

//console.log(mean([2,5,7,11,4],square));
//original mean function
/*
function mean(a,b,c){
  return (a+b+c)/3;
}*/

function mean(values, callback){
  var total = 0;
  for(i=0, max=values.length; i<max;i++){
    if (typeof callback === "function"){
      total+=callback(values[i]);
    }else{
      total+=values[i];
    }
  }
  return total/max;
}

//console.log([1,4,9].map(square));
var ar = ["red","green","blue"].map( function(color, index,array){
  return color.toUpperCase()+" "+index+" "+array.length;
} );
//console.log(ar);

//forEach call back. can use to iterate through array instead of for loop
/*var colors = ["Red","Green","Blue"];
colors.forEach(fe);

function fe(color, index){
  console.log("The color at index "+ index + " "+ color+".");
}*/

var sentence = "The brown lazy dog jumped over the fence";
words = sentence.split(" ");
total = words.reduce(function(prev,current){
  return prev+current.length;
},0);
//defining function in the reduce,map, and forEach callback makes it easier because
//you might need to use it anywhere else. if it would be needed, like square then
//it's easier to define it.

//map and square
var s = [2,6,8].map(square).reduce(function(total,current){
  return total+current;
},0
);

var t = [12,12,65].map(function(sale){
  return sale*1.15;
}).reduce(function(total,current){
  return total+current;
},0);

var numbers = [2,3,4,5,6,7,8];
var f = numbers.filter(function(number){
  return number%2 === 0;
});

console.log(f);
