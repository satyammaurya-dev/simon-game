let userSeq = [];
let gameSeq = [];
let color = ["red", "green", "blue", "yellow"];
let allScore = [];

let started = false;
let level = 0;
let score = 0;
let h3 = document.querySelector("h3");
let displayScore = document.querySelector(".score");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;

        levelUp();


    }
});
function colorFlash(btn) {
    btn.classList.add("flashStyle");
    setTimeout(function () {
        btn.classList.remove("flashStyle");
    }, 250);
}
function bodyFlashColor(body) {
    body.classList.add("bodyStyle");
    setTimeout(function () {
        body.classList.remove("bodyStyle");
    }, 250);
}
function checkSeq(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }


    } else {
        let body = document.querySelector("body");
        bodyFlashColor(body);
        h3.innerText = "Game over! press any key to start game";
        let sum = 0;
        for (let i = 1; i < level; i++) {
            sum = sum + i;
        }
        let score = sum * 10;
        displayScore.innerText = `Score ${score}`;
        allScore.push(score);

        if (allScore.length >= 1) {
            let highestScore = allScore.reduce((result, current) => {
                if (result > current) {
                    return result;
                } else {
                    return current;
                }
            });
            let maxScore = document.querySelector(".findHighestScore");
            maxScore.innerText = `Highest Score-${highestScore}`;
            console.log(allScore);
        }

        reset();

    }
}
function userBtnFlash() {
    let btn = this;
    colorFlash(btn);
    let userFlashColor = btn.getAttribute("id");
    userSeq.push(userFlashColor);
    checkSeq(userSeq.length - 1);
}
function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = color[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    colorFlash(randBtn);
}
let btns = document.querySelectorAll(".btn");
for (btn of btns) {
    btn.addEventListener("click", userBtnFlash);
}
function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
    score = 0;
    document.addEventListener("keypress", function () {
        displayScore.innerText = "";
    });
}







