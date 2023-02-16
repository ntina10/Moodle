// the canvas 
console.log("possible widths:", 
    'screen.width', screen.width, 
    "window.innerWidth", window.innerWidth,
    "possible heights:", 
    'screen.height', screen.height, 
    "window.innerHeight", window.innerHeight,
    "document.body.scrollHeight", document.body.scrollHeight, 
    "document.body.offsetHeight", document.body.offsetHeight,
    "document.body.clientHeight", document.body.clientHeight,
    "html.offsetHeight", document.documentElement.offsetHeight,
    "html.clientHeight", document.documentElement.clientHeight);
var w = screen.width + 1200; //window.innerWidth; //
var h = Math.min( document.body.scrollHeight, document.body.offsetHeight, 
    // document.documentElement.clientHeight, 
    document.documentElement.scrollHeight, document.documentElement.offsetHeight );//3456;//document.body.scrollHeight; //+ window.innerHeight; // //+ screen.height;

const totalRects = w > 992 ? 7 : 4;

// const rectWidth = w / totalRects

// grid step
var step = screen.width / 7;    //200//w / totalRects;
console.log('step', step);
var canvasElementId = 'grid';

var canvas = document.getElementById(canvasElementId);
// this is how you resize the canvas
canvas.width  = w;
canvas.height = h;
// canvas.style.width  = w + 'px';
// canvas.style.height = h + 'px';
// canvas.style.top = -1290 + 'px';
// canvas.style.right = -50 + 'px';

var ctx = canvas.getContext('2d');

// the render logic should be focusing on the rendering 
var drawGrid = function(ctx, w, h, step) {
    // set the color of the line
    ctx.strokeStyle = '#BEBEBE';
    ctx.lineWidth = 0.38;

    ctx.beginPath(); // x
    for (var x=0;x<=w;x+=step) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
    }
    // the stroke will actually paint the current path 
    ctx.stroke(); 
    
    ctx.beginPath(); // y
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
    console.log("possible widths:", 
    'screen.width', screen.width, 
    "window.innerWidth", window.innerWidth,
    "possible heights:", 
    'screen.height', screen.height, 
    "window.innerHeight", window.innerHeight,
    "document.body.scrollHeight", document.body.scrollHeight, 
    "document.body.offsetHeight", document.body.offsetHeight,
    "document.body.clientHeight", document.body.clientHeight,
    "html.offsetHeight", html.offsetHeight,
    "html.clientHeight", html.clientHeight);
    
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop/scrollArea || 0;
    
    canvas.style.right = -scrollPercent*window.innerWidth*0.6 + 'px';
    canvas.style.top = scrollPercent*this.screen.height*1.0 + 'px';
    // canvas.style.height = canvas.scroll.height - scrollPercent*window.innerWidth*0.8 + 'px';
    // square2.style.left = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
  });


  console.log("possible widths:", 
  'screen.width', screen.width, 
  "window.innerWidth", window.innerWidth,
  "possible heights:", 
  'screen.height', screen.height, 
  "window.innerHeight", window.innerHeight,
  "document.body.scrollHeight", document.body.scrollHeight, 
  "document.body.offsetHeight", document.body.offsetHeight,
  "document.body.clientHeight", document.body.clientHeight);


// var w = window.innerWidth;
// var h = document.body.scrollHeight//window.innerHeight;
// var step = w / 7;    //200//w / totalRects;

// var canvasElementId = 'grid';
// var canvas = document.getElementById(canvasElementId);

// canvas.width  = w * window.devicePixelRatio;
// canvas.height = h * window.devicePixelRatio;

// var ctx = canvas.getContext('2d');

// // the render logic should be focusing on the rendering 
// var drawGrid = function(ctx, w, h, step) {
//     // window.requestAnimationFrame(drawGrid); //maybe it would help but I donot know how to connect it with the on scroll
//     // set the color of the line
//     ctx.strokeStyle = '#BEBEBE';
//     ctx.lineWidth = 0.38;

//     ctx.beginPath(); // x
//     for (var x=0;x<=w;x+=step) {
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, h);
//     }
//     // the stroke will actually paint the current path 
//     ctx.stroke(); 

//     ctx.beginPath(); // y
//     for (var y=0;y<=h;y+=step) {
//         ctx.moveTo(0, y);
//         ctx.lineTo(w, y);
//     }
//     ctx.stroke(); 
// };

// drawGrid(ctx, w, h, step);


// var body = document.body,
//     html = document.documentElement;

// var height = Math.max( body.scrollHeight, body.offsetHeight, 
//                        html.clientHeight, html.scrollHeight, html.offsetHeight );

// var windowHeight = window.innerHeight;
// var scrollArea = height - windowHeight;

// window.addEventListener('scroll', function() {    
//     var scrollTop = window.pageYOffset || window.scrollTop;
//     var scrollPercent = scrollTop/scrollArea || 0;
    
//     canvas.style.right = -scrollPercent*window.innerWidth*0.6 + 'px';
//     canvas.style.top = scrollPercent*window.innerWidth*1.0 + 'px';
//     // // canvas.style.height = canvas.scroll.height - scrollPercent*window.innerWidth*0.8 + 'px';
//     // // square2.style.left = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
//   });