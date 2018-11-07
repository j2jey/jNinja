$question = document.getElementById("question");
$feedback = document.getElementById("feedback");
$score = document.getElementById("score");

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
//play(quiz);

var $start = document.getElementById("start");
$start.addEventListener("click",function(){play(quiz)},false);

function play(quiz){
  update($score,score);
  for(var i=0, question, answer, max=quiz.questions.length; i<max; i++)
  {
    question = quiz.questions[i].question;
    answer = ask(question);
    check(answer);
  }
  gameOver();


  function ask(question){
    update($question,quiz.question+question);
    return prompt("What is your answer: ");
  }

  function check(answer){
    if(answer === quiz.questions[i].answer){
      update($feedback,"Right","right");

      score++;
      update($score,score);
    }else{
      alert("Wrong");
      update($feedback, "Wrong","wrong");
    }
  }


  function gameOver(){
    update($feedback,"Game over. Score is "+score+".");
    //alert("Thanks for playing. \nYour score is: "+score);
  }
}
