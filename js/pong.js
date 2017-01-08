// $(document).ready(function() {
// 	alert("hi");

// });

// $("#click").click(function(){
// 	alert("hi");

// });

// function message(){

// 	alert("hello")
// }

var c = document.getElementById("canvas");

var ctx = c.getContext("2d");

var x = 40;
var y = 40;

function draw(){


	ctx.beginPath();
	ctx.arc(x,y,20,0,2 * Math.PI);
	ctx.fillStyle="blue";
	ctx.fill();


	ctx.stroke();
}

// function moveBall(){
// 	while(true){
// 		ctx.clearArc(100,75,50,0,2 * Math.PI);
// 		ctx.arc(100,75,50,0,2 * Math.PI);
// 	ctx.fillStyle="blue";
// 	ctx.fill();

// 	}

// }

$(document).keypress(function(event){
	if(event.keyCode==37){
		if(x > 20){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			x-=5;
			ctx.beginPath();
			ctx.arc(x,y,20,0,2 * Math.PI);
			ctx.fillStyle="blue";
			ctx.fill();
			ctx.stroke();
		}
	}
	if(event.keyCode==38){
		if(y > 20){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			y-=5;
			ctx.beginPath();
			ctx.arc(x,y,20,0,2 * Math.PI);
			ctx.fillStyle="blue";
			ctx.fill();
			ctx.stroke();
		}
			
	}

	if(event.keyCode==39){
		if( x < canvas.width -20){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			x+=5;
			ctx.beginPath();
			ctx.arc(x,y,20,0,2 * Math.PI);
			ctx.fillStyle="blue";
			ctx.fill();
			ctx.stroke();
		}
	}
	if(event.keyCode==40){
		if ( y < canvas.height -20){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			y+=5;
			ctx.beginPath();
			ctx.arc(x,y,20,0,2 * Math.PI);
			ctx.fillStyle="blue";
			ctx.fill();
			ctx.stroke();
		}
	}

//  alert(String.fromCharCode(event.which) + " " + event.keyCode); 
});