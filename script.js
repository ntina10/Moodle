// the canvas 
var w = screen.width + 1200;
var h = document.body.scrollHeight; //+ screen.height;

console.log('w', w, 'h', h);
// grid step
var step = 230; 
var canvasElementId = 'grid';

var canvas = document.getElementById(canvasElementId);
// this is how you resize the canvas
canvas.width  = w;
canvas.height = h;

var ctx = canvas.getContext('2d');

// the render logic should be focusing on the rendering 
var drawGrid = function(ctx, w, h, step) {
    // set the color of the line
    ctx.strokeStyle = '#BEBEBE';
    ctx.lineWidth = 0.38;

    ctx.beginPath(); 
    for (var x=0;x<=w;x+=step) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
    }
    
    // the stroke will actually paint the current path 
    ctx.stroke(); 
    
    ctx.beginPath(); 
    for (var y=0;y<=h;y+=step) {
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
    }

    ctx.stroke(); 
};

drawGrid(ctx, w, h, step);

// the moving of the canvas
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
console.log('height', height);

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = height - windowHeight;
console.log('windowHeight', windowHeight, 'windowWidth', windowWidth);
console.log('scrollArea', scrollArea);

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop/scrollArea || 0;
    
    canvas.style.right = -scrollPercent*window.innerWidth*0.6 + 'px';
    canvas.style.top = -1300 + scrollPercent*window.innerWidth*1.2 + 'px';
    // square2.style.left = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
  });


// the scrolling stuff of the horizontal scroller scrolling by vertical scroll
// let scrollingWrapper = document.querySelector('.scrolling-wrapper');
// let grid = document.querySelector('.grid-container');

var controller = new ScrollMagic.Controller();

var scrollHorizontal = new TimelineLite()
  scrollHorizontal.to("#scrolling", 1,   {x: "-33%"})	
  .to("#scrolling", 1,   {x: "-66%"})
  .to("#scrolling", 1,   {x: "-100%"})
//   .to("#scrolling", 1, {x:'-300px'})

var horizontalScroll = new ScrollMagic.Scene({
      triggerElement: "#scrolling",
      triggerHook: 'onLeave',
      duration: "300%"
    }).setPin("#scrolling").setTween(scrollHorizontal).addTo(controller);

// var controller = new ScrollMagic.Controller();

// var scrollHorizontal = new TimelineLite()
//   scrollHorizontal.to("#scrolling-wrapper", 1,   {x: "-20%"})	
//   .to("#scrolling-wrapper", 1,   {x: "-40%"})
//   .to("#scrolling-wrapper", 1,   {x: "-60%"})
//   .to("#scrolling-wrapper", 1,   {x: "-80%"})
// //   .to("#scrolling", 1, {x:'-300px'})


// var horizontalScroll = new ScrollMagic.Scene({
//       triggerElement: "#scrolling-wrapper",
//       triggerHook: 'onLeave',
//       duration: "400%"
//     }).setPin("#scrolling-wrapper").setTween(scrollHorizontal).addTo(controller);

// FIRST PLAYER /////////////////////////////////////////////////
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


