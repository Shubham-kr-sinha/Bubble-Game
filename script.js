var timer = 60;
var score = 0;
var hitrn = 0;

function increasescore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function decreasescore() {
    score -=10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewhit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makebubble() {
    var clutter = "";

    for (var i = 1; i < 177; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML = `Game Over`;
            clearInterval(timerint);
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn){
        increasescore();
        makebubble();
        getNewhit();
    }
    else{
        decreasescore();
        makebubble();
        getNewhit();
    }
})

runTimer();
makebubble();
getNewhit();
