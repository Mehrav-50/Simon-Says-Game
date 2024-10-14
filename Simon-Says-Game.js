let gameSeq =[];
let userSeq =[];
let started = false;
let btns =["a","b","c","d"];
let level = 0;
let highscore = 0;
let h2 = document.querySelector(".y");
document.addEventListener("keypress",()=>{
    if(started == false){
        started = true;
        levelUp();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash")
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    if (highscore <level){
        highscore = level;
    }
h2.innerText = `level ${level}`;
let randIdx = Math.floor(Math.random()*4);
let randCol = btns[randIdx];
let randBtn = document.querySelector(`.${randCol}`)
btnFlash(randBtn);
gameSeq.push(randCol);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText = `Game over Press any key to restart the game.
         Your score was ${level}
         Highest score is ${highscore}`;
        reset();
    }
}
function reset(){
    started = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    let userCol = btn.getAttribute("id");
    userSeq.push(userCol);
    checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}