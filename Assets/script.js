
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
        answer.push(answerID.substring(answerID.indexOf("-")+1));
        console.log(answer);
        $('.carousel').carousel("next")
      }
  });



function hideCardID()
{

}


function nextQuestion()
{


}


function timer()
{
    
}