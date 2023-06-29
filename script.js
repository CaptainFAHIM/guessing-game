'use strict';

let num = Math.trunc((Math.random()*20)+1);
let score = 20;
let high_score = 0;

document.querySelector(".check").addEventListener("click", function()
{
   const guess = Number(document.querySelector(".guess").value);
   console.log(guess);
   //if blank
   if(!guess)
   {
    document.querySelector(".message").textContent="Please Enter a Number!";
   }
   //if matches
   else if(num===guess)
   {
    document.querySelector(".message").textContent="Correct Answer🎉";
    document.querySelector(".number").textContent=num;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //for high score
    
    if(high_score<score)
    {
        high_score=score;
        document.querySelector(".highscore").textContent = high_score;
    }

   }
   //if the numer is high
   else if(guess>num)
   {
    
    if(score>1)
    {

        document.querySelector(".message").textContent="Too High📈";
        score--;
        document.querySelector(".score").textContent=score;
    }
    else{
        document.querySelector(".message").textContent="You Lost the Game😢";
        document.querySelector(".score").textContent=0;
    }
   }
   //if the number is low
   else if(guess<num)
   {
    if(score>1)
    {
    document.querySelector(".message").textContent="Too Low📉";
    score--;
    document.querySelector(".score").textContent=score;
}
else{
    document.querySelector(".message").textContent="You Lost the Game😢";
        document.querySelector(".score").textContent=0;
}
   }
});

//Again Button
document.querySelector(".again").addEventListener("click", function()
{
    document.querySelector("body").style.backgroundColor = "#222";
    score=20;
    num = Math.trunc((Math.random()*20)+1);
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value="";
});