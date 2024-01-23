let userScore=0;
let compScore=0;




const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")

const drawGame =()=>{
    console.log("game is draw.");
    msg.innerText="Game is draw.Play again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("Congralution you wins.");
        msg.innerText=`You win.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("oops!!! you  lose");
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}


const genCompChoice=()=>{
    const options =["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const playGame = (userChoice) =>{
    console.log("userchoice = ",userChoice);
    const compChoice =genCompChoice();
    console.log("Comp choice  = ",compChoice);

    

    if(userChoice===compChoice){
        drawGame();

    }else{
    let userWin=true;

        if(userChoice==="rock"){
            userWin =compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }
        else{
            userChoice=compChoice==="scissor"?false:true;
        }
showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
// console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});