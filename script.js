
// let scrollingWrapper = document.querySelector('.scrolling-wrapper');
// let grid = document.querySelector('.grid-container');

// scrollingWrapper.addEventListener('onmousewheel', () => {
//     console.log('miaou');
//     var positionY = window.scrollY;
//     console.log(positionY);
//     // scrollingWrapper.css("transform","translateX(-" + positionY + "%)");
//     scrollingWrapper.style.transform = "translateX(-" + positionY / 100 + "%)";
// });

// scrollingWrapper.onscroll = () => {
//     $('.scrolling-wrapper').scrollLeft();
// }
// window.addEvent('scroll',function(e) {
//     console.log('mememe');
//     $('.scrolling-wrapper').scrollLeft(100);

// });

// var scroller = {};
// scroller.e = document.querySelector('.scrolling-wrapper');
// // document.getElementById("b");

// if (scroller.e.addEventListener) {
//     scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
//     scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
// } else scroller.e.attachEvent("onmousewheel", MouseWheelHandler);

// function MouseWheelHandler(e) {

//     // cross-browser wheel delta
//     var e = window.event || e;
//     var delta = - 20 * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));

//     var pst = $('.scrolling-wrapper').scrollLeft() + delta;

//     if (pst < 0) {
//         pst = 0;
//     } else if (pst > $('.scrolling-wrapper').width()) {
//         pst = $('.scrolling-wrapper').width();
//     }

//     $('.scrolling-wrapper').scrollLeft(pst);

//     return false;
// }

// scrollingWrapper.attachEvent("onmousewheel", MouseWheelHandler);

const audio1 = document.getElementById('audio1');
const btn1 = document.querySelector('.player1');
let circularProgress = document.querySelector('.circular-progress');

btn1.addEventListener("click", () => {
    
    if (audio1.paused) {
        // pause_btn.removeClass('.hidden');
        // play_btn.addClass('.hidden');
        audio1.play();
        btn1.className = "pause";

        if(!audio2.paused) {
            audio2.pause();
            btn2.className = "play";
        }
        if(!audio3.paused) {
            audio3.pause();
            btn3.className = "play";
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
const audio2 = document.getElementById('audio2');
const btn2 = document.querySelector('.player2');
let circularProgress2 = document.querySelector('.circular-progress2');

btn2.addEventListener("click", () => {
    
    if (audio2.paused) {
        // pause_btn.removeClass('.hidden');
        // play_btn.addClass('.hidden');
        audio2.play();
        btn2.className = "pause";

        if(!audio1.paused) {
            audio1.pause();
            btn1.className = "play";
        }
        if(!audio3.paused) {
            audio3.pause();
            btn3.className = "play";
        }
    } else {
        // pause_btn.css("display", "none");
        // pause_btn.addClass('hidden');
        // play_btn.removeClass('hidden');
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
const audio3 = document.getElementById('audio3');
const btn3 = document.querySelector('.player3');
let circularProgress3 = document.querySelector('.circular-progress3');

btn3.addEventListener("click", () => {
    
    if (audio3.paused) {
        // pause_btn.removeClass('.hidden');
        // play_btn.addClass('.hidden');
        audio3.play();
        btn3.className = "pause";

        if(!audio2.paused) {
            audio2.pause();
            btn2.className = "play";
        }
        if(!audio1.paused) {
            audio1.pause();
            btn1.className = "play";
        }
    } else {
        // pause_btn.css("display", "none");
        // pause_btn.addClass('hidden');
        // play_btn.removeClass('hidden');
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
const audio4 = document.getElementById('audio4');
const btn4 = document.querySelector('.player4');
let circularProgress4 = document.querySelector('.circular-progress4');

btn4.addEventListener("click", () => {
    
    if (audio4.paused) {
        // pause_btn.removeClass('.hidden');
        // play_btn.addClass('.hidden');
        audio4.play();
        btn4.className = "pause";

        if(!audio2.paused) {
            audio2.pause();
            btn2.className = "play";
        }
        if(!audio1.paused) {
            audio1.pause();
            btn1.className = "play";
        }
    } else {
        // pause_btn.css("display", "none");
        // pause_btn.addClass('hidden');
        // play_btn.removeClass('hidden');
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
const audio5 = document.getElementById('audio5');
const btn5 = document.querySelector('.player5');
let circularProgress5 = document.querySelector('.circular-progress5');

btn5.addEventListener("click", () => {
    
    if (audio5.paused) {
        // pause_btn.removeClass('.hidden');
        // play_btn.addClass('.hidden');
        audio5.play();
        btn5.className = "pause";

        if(!audio2.paused) {
            audio2.pause();
            btn2.className = "play";
        }
        if(!audio1.paused) {
            audio1.pause();
            btn1.className = "play";
        }
    } else {
        // pause_btn.css("display", "none");
        // pause_btn.addClass('hidden');
        // play_btn.removeClass('hidden');
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
const audio6 = document.getElementById('audio6');
const btn6 = document.querySelector('.player6');
let circularProgress6 = document.querySelector('.circular-progress6');

btn6.addEventListener("click", () => {
    
    if (audio6.paused) {
        // pause_btn.removeClass('.hidden');
        // play_btn.addClass('.hidden');
        audio6.play();
        btn6.className = "pause";

        if(!audio2.paused) {
            audio2.pause();
            btn2.className = "play";
        }
        if(!audio1.paused) {
            audio1.pause();
            btn1.className = "play";
        }
    } else {
        // pause_btn.css("display", "none");
        // pause_btn.addClass('hidden');
        // play_btn.removeClass('hidden');
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


