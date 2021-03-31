$(".carousel").carousel({
    interval:false
  });

  let quizBox = document.querySelector(".carousel");
  let quizButtons = document.querySelector(".btn");
  let answer = [];
  let scoreBoard = [];
  let progressBar = "20" 
  let newTimer; 
  let currentQ;
  let gameOver = false;

  quizBox.addEventListener("click", function(event)
  {
      if(!gameOver && event.target.type == "button" && event.target.type != "submit")
      {
        let answerID = event.target.id;
        answerID = answerID.substring(answerID.indexOf("-")+1);
        nextQuestion(answerID,currentQ++);
      }
  });

  function nextQuestion(id)
  {



    // update the progress bar
      switch (answer.length)
      {
        case 1: changeElement("progressBar","30%");
    
        currentQ++;
        break;
        case 2: changeElement("progressBar","50%");

        currentQ++;
        break;
        case 3: changeElement("progressBar","70%");

        currentQ++;
        break;
        case 4: changeElement("progressBar","90%");
    
        currentQ++;
        break;
        default:changeElement("progressBar","100%");
        currentQ++;
        gameOver = true;
        endQuiz();
      }
    $(".carousel").carousel("next");
    }
  }

  function changeElement(id, newPro) {
    var el = document.getElementById(id);
    el.style.width = newPro;
    $("#progressText").text(newPro + " Progress");
  }

var skillsListEl = $('#leaderboard');
let currentDate = new Date();
let cDay =  currentDate.getDate();
let cMonth = currentDate.getMonth();
let cYear = currentDate.getFullYear();
let todayDate = cDay + "/" + cMonth + "/" + cYear;

function printSkills(userName,date)
{
  let score = returnResult(answer);

  if(userName == "")
  {
    return;
  }

  if(score != 0)
  {
    score = (score /5) * 100
  }

  var listEl = $('<li>');
  var listDetail = userName.concat(' on ', date, ' with a score of ', score, '%');
  listEl.addClass('list-group-item bg-warning m-1').text(listDetail);
  listEl.appendTo(skillsListEl);

};

var subName = document.getElementById("subName");
subName.addEventListener("click",function() {
  var inputName = $("#typeText").val();

  if (inputName != "" )
  {
    printSkills(inputName,todayDate);
  }

});

  let endDate = new Date();
  endDate.setMinutes(endDate.getMinutes()+5); 
  
  function startTimer()
  {
   newTimer = setInterval(setTimer, 1000);
  }

  startTimer();
  
  function myStopFunction() {
    clearInterval(newTimer);
  }

 function setTimer()
  {
    /* define new varible with current time */
    let curDate = new Date().getTime();
    let timeRemain = endDate - curDate;
    {
      let mins = Math.floor((timeRemain % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((timeRemain % (1000 * 60)) / 1000);
      document.getElementById("timer-mins").innerHTML= "Time Left: " + ("0" + mins).slice(-2) +
      "<span class='label'>MIN(S)</span>";
      document.getElementById("timer-secs").innerHTML= ("0" + secs).slice(-2) +
      "<span class='label'>SEC(S)</span>";
    }
  }



  function endQuiz()
  {
    console.log("aanswers length ", answer.length)
     
      myStopFunction();
      document.getElementById("timer-mins").innerHTML= "";
      document.getElementById("timer-secs").innerHTML= "";
      $(".carousel").carousel("next")

  }


function returnResult(userAnswers)
{
  let answers = ["2","4","1","3","3"];
  let score = 0;
  for(i=0; i< answers.length; i++)
  {
    if (answers[i] == answer[i])
    {
      score = score + 1;
    }
  }

  return score;
}



