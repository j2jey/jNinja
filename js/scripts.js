var $question = document.getElementById("question");
var $feedback = document.getElementById("feedback");
var $score = document.getElementById("score");
var $start = document.getElementById("start");
var $form = document.getElementById("answer");
var $timer = document.getElementById("timer");
//woohoo
function update(element, content, klass){
  var p = element.firstChild || document.createElement("p");
  p.textContent = content
  element.append(p);
  if(klass){
    p.className = klass;
  }
}


quiz = {
  "name":"Super Hero Name Quiz",
  "description":"How many super heroes can you name?",
  "question":"What is the real name of ",
  "questions":[
    {"question":"Superman","answer":"Clark Kent"},
    {"question":"Wonder Woman","answer":"Diana Prince"},
    {"question":"Batman","answer":"Bruce Wayne"}
  ]
}

//alert(quiz.name);
//alert(quiz.description);

var score = 0;
var time = 20;




//play(quiz);



$start.addEventListener("click",function(){play(quiz)},false);

function hide(element){
  element.style.display = "none";
}

function show(element){
  element.style.display = "block";
}

hide($form);
show($start);

function play(quiz){

  update($score,score);
  update($timer,time)
  show($form);
  hide($start);
  var interval = window.setInterval(countDown, 1000);
    function countDown(){
      time--;
      update($timer, time);
      if(time<=0){
        gaveOver();
      }
    }



  /*
  for(var i=0, question, answer, max=quiz.questions.length; i<max; i++)
  {
    question = quiz.questions[i].question;
    answer = ask(question);
    check(answer);
  }
  gameOver();
 */

 $form.addEventListener("submit",function(event){
   event.preventDefault();
   check($form[0].value);
 })


 var i = 0;
 chooseQuestion();

 function chooseQuestion(){
   var question = quiz.questions[i].question;
   ask(question);
 }

  function ask(question){
    update($question,quiz.question+question);
    //return prompt("What is your answer: ");
  }

  function check(answer){
    if(answer === quiz.questions[i].answer){
      update($feedback,"Right","right");

      score++;
      update($score,score);
    }else{
      //alert("Wrong");
      update($feedback, "Wrong","wrong");
    }

    i++;
    if(i==quiz.questions.length){
      gameOver();
    }else{
      chooseQuestion();
    }

  }


  function gameOver(){
    window.clearInterval(interval);
    update($question,"Game over. Score is "+score+".");
    update($score,score);

    hide($form);
    show($start);

    //alert("Thanks for playing. \nYour score is: "+score);
  }
}
