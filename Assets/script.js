
$(".carousel").carousel({
    interval:false
  });


  let quizBox = document.querySelector(".carousel");
  let quizButtons = document.querySelector(".btn");
  let answer = [];
  let scoreBoard = [];
  let score = 0;
  let answerID;

  quizBox.addEventListener("click", function(event)
  {
      if(event.target.type == "button" && event.target.type != "submit")
      {
        answerID = event.target.id;
        answer.push(answerID.substring(answerID.indexOf("-")+1)); //return the number of btn element which = answer chosen
        if(answer.length < 5)
        {
        $(".carousel").carousel("next")
        }
        else
        {
            endQuiz();
        }
      }
  });

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