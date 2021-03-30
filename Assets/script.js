
$(".carousel").carousel({
    interval:false
  });


  let quizBox = document.querySelector(".carousel");
  let quizButtons = document.querySelector(".btn");
  let answer = [];
  let scoreBoard = [];
  let score = 0;
  let progressBar = "20" 
  let answerID;

  quizBox.addEventListener("click", function(event)
  {
      if(event.target.type == "button" && event.target.type != "submit")
      {
        answerID = event.target.id;
        answer.push(answerID.substring(answerID.indexOf("-")+1)); //break the number of btn element which = answer chosen
        if(answer.length < 5)
        {
          switch (answer.length)
          {
            case 1: changeElement("progressBar","40%") ;
            break;
            case 2: changeElement("progressBar","60%");
            break;
            case 3: changeElement("progressBar","80%");
            break;
            case 4: changeElement("progressBar","100%");
            
          }
        $(".carousel").carousel("next")
        }
        else
        {
            endQuiz();
        }
   
      }
  });

  function changeElement(id, newPro) {
    var el = document.getElementById(id);
    el.style.width = newPro;
    $("#progressText").text(newPro + " complete");
  }

  $("#carouselQuiz").on("slide.bs.carousel", function (e) {
  })

function timer()
{
    
}

function endQuiz()
{
    let answers = ["2","4","1","3","3"];
    

    for(i=0; i< answers.length; i++)
    {
      if (answers[i] === answer[i])
      {
        score = score + 1;
      }
    }
    score = score / 5 * 100;
    $(".carousel").carousel("next")
}



var skillsListEl = $('#leaderboard');
let currentDate = new Date();
let cDay =  currentDate.getDate();
let cMonth = currentDate.getMonth();
let cYear = currentDate.getFullYear();
let todayDate = cDay + "/" + cMonth + "/" + cYear;

function printSkills(userName,date)
{


  if(userName == "")
  {
    return;
  }

  var listEl = $('<li>');
  var listDetail = userName.concat(' on ', date, ' with a score of ', score, '%');
  listEl.addClass('list-group-item bg-warning').text(listDetail);
  listEl.appendTo(skillsListEl);
};

subName.addEventListener("click",function() {
  var inputName = $("#typeText").val();

  if (inputName != "" )
  {
    printSkills(inputName,todayDate);
  }

});



//count down timer
setInterval(() => {
  
  var d = new Date(); //get current time
  var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet current mm:ss to seconds for easier caculation, we don't care hours.
  var fiveMin = 60 * 5; //five minutes is 300 seconds!
  var timeleft = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
  var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds back into mm:ss 
  document.getElementById('timer').innerHTML = "Time to go: " + result;

}, 500);


