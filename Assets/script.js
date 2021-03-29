
$('.carousel').carousel({
    interval:false
  });


  let quizBox = document.querySelector(".carousel");
  let quizButtons = document.querySelector(".btn");
  let answer = [];
  let answerID;

  quizBox.addEventListener("click", function(event)
  {
      if(event.target.type == "button")
      {
        answerID = event.target.id;
        answer.push(answerID.substring(answerID.indexOf("-")+1)); //return the number of btn element which = answer chosen
        if(answer.length < 5)
        {
        $('.carousel').carousel("next")
        }
        else
        {
            endQuiz();
        }
      }
  });

  $('#carouselQuiz').on('slide.bs.carousel', function (e) {
  })

function timer()
{
    
}

function endQuiz()
{
    let answers = ["2","4","1","3","2"];
}