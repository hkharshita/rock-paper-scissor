let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector('#msg');

const userPoints=document.querySelector('#user-score');
const compPoints=document.querySelector('#comp-score');

const showWinner=(userWin,compChoice,userChoice)=>
{
    if(userWin) 
        {
            userScore++;
            userPoints.innerText=userScore;
            msg.innerText=`Your ${userChoice} beats ${compChoice} `;
            msg.style.backgroundColor="green";
        }
        else{
            compScore++;
            compPoints.innerText=compScore;
            msg.innerText=`${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red";
        }
       
}
const genCompChoice=()=>{
    const arr=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return arr[randIdx];
};

const drawGame=()=>{
    
    msg.innerText="Game was draw! Play again.";
    msg.style.backgroundColor="black";
   
};
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        userWin=true;
        if(userChoice==="paper")
        {
            //rock scissor
            userWin= compChoice==="rock" ? true : false;
         
        }
        else if(userChoice==="rock")
        {
            //paper scissor
            userWin= compChoice==="scissor" ? true : false;
        }
        else{
            //rock paper
            userWin= compChoice==="paper" ? true : false;
        }
         showWinner(userWin,compChoice,userChoice);
    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
const userChoice=choice.getAttribute("id");
playGame(userChoice);
    })
})
