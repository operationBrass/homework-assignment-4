$(".carousel").carousel({
    interval:false
  });

  let quizBox = document.querySelector(".carousel");
  let quizButtons = document.querySelector(".btn");
  let answer = [];
  let score = 0;
  let progressBar = "20" 
  let answerID;
  let newTimer; 

  quizBox.addEventListener("click", function(event)
  {
      if(event.target.type == "button" && event.target.id != "subName")
      {

        answerID = event.target.id;
        answer.push(answerID.substring(answerID.indexOf("-")+1)); //break the number of btn element which = answer chosen
        if(answer.length < 5)
        {
          switch (answer.length)
          {
            case 1: changeElement("progressBar","30%");
            break;
            case 2: changeElement("progressBar","50%");
      
            break;
            case 3: changeElement("progressBar","70%");
            break;
            case 4: changeElement("progressBar","90%");
            break;
            default: changeElement("progressBar","0%");
          }
        $(".carousel").carousel("next")
        }
        else
        {
          changeElement("progressBar","100%");
          endQuiz();
        }
      }
  });

  function changeElement(id, newPro) {
    var el = document.getElementById(id);
    el.style.width = newPro;
    $("#progressText").text(newPro + " Progress");
  }



let skillsListEl = $('#leaderboard');
var scoreBoard = [];
let currentDate = new Date();
let cDay =  currentDate.getDate();
let cMonth = currentDate.getMonth();
let cYear = currentDate.getFullYear();
let todayDate = cDay + "/" + cMonth + "/" + cYear;


var subName = document.getElementById("subName");

subName.addEventListener("click",function() {
var inputName = $("#typeText").val();

  if (inputName != "" )
  {
    leaderBoardWrite(inputName,todayDate);
  }

});

function leaderBoardWrite(userName,date)
{
  
  if(userName == "")
  {
    return;
  }

  else if(scoreBoard === null)
  {
    scoreBoard = [];
  }

  var listDetail = userName.concat(' on ', date, ' with a score of ', score, '%  (', answer, ')');
  scoreBoard.push(listDetail);
  localStorage.setItem("scores", JSON.stringify(scoreBoard));
  writeElement(listDetail);
};

function leaderBoardRead()
{

 scoreBoard = JSON.parse( localStorage.getItem('scores') );

  if(scoreBoard!= null)
{
  for (i=0; i<scoreBoard.length; i++)
  {
    writeElement(scoreBoard[i])
  }

}

}

leaderBoardRead();

function writeElement(textToWrite)
{
  var listEl = $('<li>');
  listEl.addClass('list-group-item bg-warning').text(textToWrite);
  listEl.appendTo(skillsListEl);
}

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
      let answers = ["2","4","1","3","3"];
      myStopFunction();
      document.getElementById("timer-mins").innerHTML= "";
      document.getElementById("timer-secs").innerHTML= "";

      for(i=0; i< answers.length; i++)
      {
        if (answers[i] === answer[i])
        {
          score = score + 1;
          answer[i] = "Y"
        }
        else
        {
          answer[i] = "N"
        }
      }

      score = score / 5 * 100;
      $(".carousel").carousel("next")

  }

  let clearAll = document.getElementById("clearStorage")
  clearAll.addEventListener("click", function(){
    localStorage.clear()
    $('li').remove();
  }
    );

