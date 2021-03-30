
$(".carousel").carousel({
    interval:false
  });


  let quizBox = document.querySelector(".carousel");
  let quizButtons = document.querySelector(".btn");
  let answer = [];
  let scoreBoard = [];
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
        $(".progress-bar-striped").style = "width:40%";
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
    let score = 0;

    for(i=0; i< answers.length; i++)
    {
      if (answers[i] === answer[i])
      {
        score = score + 1;
      }
    }

    $(".carousel").carousel("next")
}



var skillsListEl = $('#leaderboard');
let currentDate = new Date();
let cDay =  currentDate.getDate()

function printSkills(userName,date)
{


  if(userName == "")
  {
    return;
  }

  var listEl = $('<li>');
  var listDetail = userName.concat(' on ', date, ' with a score of ', answer);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
  
};

subName.addEventListener("click",function() {
  var inputName = $("#typeText").val();

  if (inputName != "" )
  {
    printSkills(inputName,cDay);
  }

});