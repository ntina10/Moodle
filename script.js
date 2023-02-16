//const audio_list = document.getElementsByTagName('audio');

// FIRST PLAYER /////////////////////////////////////////////////
var audio1 = document.getElementById('audio1');
var btn1 = document.querySelector('.player1');
let circularProgress = document.querySelector('.circular-progress');

btn1.addEventListener("click", () => {
    
    if (audio1.paused) {
        // pause_btn.removeClass('.hidden');
        // play_btn.addClass('.hidden');
        audio1.play();
        btn1.className = "pause";

        // if(!audio2.paused) {
        //     audio2.pause();
        //     btn2.className = "play";
        // }
        // if(!audio3.paused) {
        //     audio3.pause();
        //     btn3.className = "play";
        // }

        const idx = 1;
        for (let i=1; i<10; i++) {
            if(i != idx && !document.getElementById(`audio${i}`).paused) {
                document.getElementById(`audio${i}`).pause();
                //document.querySelector(`.player${i}`).className = "play"; //not working????
                window[`btn${i}`].className = "play";   // works for var types 
            }
        }
    } else {
        // pause_btn.css("display", "none");
        // pause_btn.addClass('hidden');
        // play_btn.removeClass('hidden');
        audio1.pause();
        btn1.className = "play";
    }

});

audio1.addEventListener("ended", function() {
    btn1.className = "play";
    circularProgress.style.background = `conic-gradient(#1ED760 0deg, #cecece 0deg)`;
});

audio1.addEventListener('timeupdate', () => {
    const progress = (audio1.currentTime / audio1.duration) * 100;
    circularProgress.style.background = `conic-gradient(#1ED760 ${progress * 3.6}deg, #cecece 0deg)`;  
});

// SECOND PLAYER /////////////////////////////////////////////////
var audio2 = document.getElementById('audio2');
var btn2 = document.querySelector('.player2');
let circularProgress2 = document.querySelector('.circular-progress2');

btn2.addEventListener("click", () => {
    
    if (audio2.paused) {
        audio2.play();
        btn2.className = "pause";

        const idx = 2;
        for (let i=1; i<10; i++) {
            if(i != idx && !document.getElementById(`audio${i}`).paused) {
                document.getElementById(`audio${i}`).pause();
                window[`btn${i}`].className = "play";
            }
        }
    } else {
        audio2.pause();
        btn2.className = "play";
    }
});

audio2.addEventListener("ended", function() {
    btn2.className = "play";
    circularProgress2.style.background = `conic-gradient(#1ED760 0deg, #cecece 0deg)`;
});

audio2.addEventListener('timeupdate', () => {
    const progress = (audio2.currentTime / audio2.duration) * 100;
    circularProgress2.style.background = `conic-gradient(#1ED760 ${progress * 3.6}deg, #cecece 0deg)`;  
});

// THIRD PLAYER ////////////////////////////////////////////////////
var audio3 = document.getElementById('audio3');
var btn3 = document.querySelector('.player3');
let circularProgress3 = document.querySelector('.circular-progress3');

btn3.addEventListener("click", () => {
    
    if (audio3.paused) {
        audio3.play();
        btn3.className = "pause";

        const idx = 3;
        for (let i=1; i<10; i++) {
            if(i != idx && !document.getElementById(`audio${i}`).paused) {
                document.getElementById(`audio${i}`).pause();
                window[`btn${i}`].className = "play";
            }
        }
    } else {
        audio3.pause();
        btn3.className = "play";
    }
});

audio3.addEventListener("ended", function() {
    btn3.className = "play";
    circularProgress3.style.background = `conic-gradient(#1ED760 0deg, #cecece 0deg)`;
});

audio3.addEventListener('timeupdate', () => {
    const progress = (audio3.currentTime / audio3.duration) * 100;
    circularProgress3.style.background = `conic-gradient(#1ED760 ${progress * 3.6}deg, #cecece 0deg)`;  
});

// FORTH PLAYER
var audio4 = document.getElementById('audio4');
var btn4 = document.querySelector('.player4');
let circularProgress4 = document.querySelector('.circular-progress4');

btn4.addEventListener("click", () => {
    
    if (audio4.paused) {
        audio4.play();
        btn4.className = "pause";

        const idx = 4;
        for (let i=1; i<10; i++) {
            if(i != idx && !document.getElementById(`audio${i}`).paused) {
                document.getElementById(`audio${i}`).pause();
                window[`btn${i}`].className = "play";
            }
        }
    } else {
        audio4.pause();
        btn4.className = "play";
    }
});

audio4.addEventListener("ended", function() {
    btn4.className = "play";
    circularProgress4.style.background = `conic-gradient(#1ED760 0deg, #cecece 0deg)`;
});

audio4.addEventListener('timeupdate', () => {
    const progress = (audio4.currentTime / audio4.duration) * 100;
    circularProgress4.style.background = `conic-gradient(#1ED760 ${progress * 3.6}deg, #cecece 0deg)`;  
});

// FIFTH PLAYER
var audio5 = document.getElementById('audio5');
var btn5 = document.querySelector('.player5');
let circularProgress5 = document.querySelector('.circular-progress5');

btn5.addEventListener("click", () => {
    
    if (audio5.paused) {
        audio5.play();
        btn5.className = "pause";

        const idx = 5;
        for (let i=1; i<10; i++) {
            if(i != idx && !document.getElementById(`audio${i}`).paused) {
                document.getElementById(`audio${i}`).pause();
                window[`btn${i}`].className = "play";
            }
        }
    } else {
        audio5.pause();
        btn5.className = "play";
    }
});

audio5.addEventListener("ended", function() {
    btn5.className = "play";
    circularProgress5.style.background = `conic-gradient(#1ED760 0deg, #cecece 0deg)`;
});

audio5.addEventListener('timeupdate', () => {
    const progress = (audio5.currentTime / audio5.duration) * 100;
    circularProgress5.style.background = `conic-gradient(#1ED760 ${progress * 3.6}deg, #cecece 0deg)`;  
});

// SIXTH PLAYER
var audio6 = document.getElementById('audio6');
var btn6 = document.querySelector('.player6');
let circularProgress6 = document.querySelector('.circular-progress6');

btn6.addEventListener("click", () => {
    
    if (audio6.paused) {
        audio6.play();
        btn6.className = "pause";

        const idx = 6;
        for (let i=1; i<10; i++) {
            if(i != idx && !document.getElementById(`audio${i}`).paused) {
                document.getElementById(`audio${i}`).pause();
                window[`btn${i}`].className = "play";
            }
        }
    } else {
        audio6.pause();
        btn6.className = "play";
    }
});

audio6.addEventListener("ended", function() {
    btn6.className = "play";
    circularProgress6.style.background = `conic-gradient(#1ED760 0deg, #cecece 0deg)`;
});

audio6.addEventListener('timeupdate', () => {
    const progress = (audio6.currentTime / audio6.duration) * 100;
    circularProgress6.style.background = `conic-gradient(#1ED760 ${progress * 3.6}deg, #cecece 0deg)`;  
});

// SEVENTH PLAYER
var audio7 = document.getElementById('audio7');
var btn7 = document.querySelector('.player7');
let circularProgress7 = document.querySelector('.circular-progress7');

btn7.addEventListener("click", () => {
    
    if (audio7.paused) {
        audio7.play();
        btn7.className = "pause";

        const idx = 7;
        for (let i=1; i<10; i++) {
            if(i != idx && !document.getElementById(`audio${i}`).paused) {
                document.getElementById(`audio${i}`).pause();
                window[`btn${i}`].className = "play";
            }
        }
    } else {
        audio7.pause();
        btn7.className = "play";
    }
});

audio7.addEventListener("ended", function() {
    btn7.className = "play";
    circularProgress7.style.background = `conic-gradient(#1ED760 0deg, #cecece 0deg)`;
});

audio7.addEventListener('timeupdate', () => {
    const progress = (audio7.currentTime / audio7.duration) * 100;
    circularProgress7.style.background = `conic-gradient(#1ED760 ${progress * 3.6}deg, #cecece 0deg)`;  
});

// EIGHTH PLAYER
var audio8 = document.getElementById('audio8');
var btn8 = document.querySelector('.player8');
let circularProgress8 = document.querySelector('.circular-progress8');

btn8.addEventListener("click", () => {
    
    if (audio8.paused) {
        audio8.play();
        btn8.className = "pause";

        const idx = 8;
        for (let i=1; i<10; i++) {
            if(i != idx && !document.getElementById(`audio${i}`).paused) {
                document.getElementById(`audio${i}`).pause();
                window[`btn${i}`].className = "play";
            }
        }
    } else {
        audio8.pause();
        btn8.className = "play";
    }
});

audio8.addEventListener("ended", function() {
    btn8.className = "play";
    circularProgress8.style.background = `conic-gradient(#1ED760 0deg, #cecece 0deg)`;
});

audio8.addEventListener('timeupdate', () => {
    const progress = (audio8.currentTime / audio8.duration) * 100;
    circularProgress8.style.background = `conic-gradient(#1ED760 ${progress * 3.6}deg, #cecece 0deg)`;  
});

// NINTH PLAYER
var audio9 = document.getElementById('audio9');
var btn9 = document.querySelector('.player9');
let circularProgress9 = document.querySelector('.circular-progress9');

btn9.addEventListener("click", () => {
    
    if (audio9.paused) {
        audio9.play();
        btn9.className = "pause";

        const idx = 9;
        for (let i=1; i<10; i++) {
            if(i != idx && !document.getElementById(`audio${i}`).paused) {
                document.getElementById(`audio${i}`).pause();
                window[`btn${i}`].className = "play";
            }
        }
    } else {
        audio9.pause();
        btn9.className = "play";
    }
});

audio9.addEventListener("ended", function() {
    btn9.className = "play";
    circularProgress9.style.background = `conic-gradient(#1ED760 0deg, #cecece 0deg)`;
});

audio9.addEventListener('timeupdate', () => {
    const progress = (audio9.currentTime / audio9.duration) * 100;
    circularProgress9.style.background = `conic-gradient(#1ED760 ${progress * 3.6}deg, #cecece 0deg)`;  
});
