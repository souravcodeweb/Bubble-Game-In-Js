let timer = 60;
let score = 0;
let hitrn = 0;

function Inscore() {
    score += 10;
    document.getElementById("inscore").textContent = score;
}

function runtimer() {
    let timerend = setInterval(function(){
        if(timer > 0) {
            timer--;
            document.getElementById("timervalue").textContent = timer;
        } else {
            clearInterval(timerend)
            document.querySelector(".botom").innerHTML = `<h1>Game Over</h1>`;
        }
    
    }, 1000)
}

function getnewHit() {
    hitrn = Math.floor(Math.random() *10);
    document.getElementById("hit").textContent = hitrn
}

function makebubble() {
    let cunter = ""
    
    for(let i = 1; i<= 297; i++) {
        let num = Math.floor(Math.random()*10)
        cunter += `<div class="bubble">${num}</div>`
    }
    
    document.querySelector(".botom").innerHTML = cunter;
    }

document.querySelector(".botom").addEventListener('click', function(dets) {
    let getanumber = Number(dets.target.textContent);

    if(getanumber === hitrn) {
        Inscore();
        makebubble();
        getnewHit();
    }
})


getnewHit();
runtimer();
makebubble();