var canvas = document.getElementById('source');
var context = canvas.getContext('2d');
var dx= 4;
var dy=4;
var y=150;
var x=10;
function draw(){

	context.clearRect(0,0,300,300);
	context.beginPath();
	context.fillStyle="#00FF00";
	context.arc(x,y,20,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	if( x<0 || x>300)
	dx=-dx;
	if( y<0 || y>300)
		dy=-dy;
		x+=dx;
		y+=dy;
    window.requestAnimationFrame(draw)
	}
draw();
