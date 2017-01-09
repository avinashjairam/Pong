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


var ctx2 = c.getContext("2d");


var xPos = canvas.width-10;
var yPos = canvas.height/2; 

function draw(){


	ctx.beginPath();
	ctx.arc(x,y,20,0,2 * Math.PI);
	ctx.fillStyle="blue";
	ctx.fill();


	ctx.stroke();

	setInterval(movingBall,10);
}

// function moveBall(){
// 	while(true){
// 		ctx.clearArc(100,75,50,0,2 * Math.PI);
// 		ctx.arc(100,75,50,0,2 * Math.PI);
// 	ctx.fillStyle="blue";
// 	ctx.fill();

// 	}

// }


function movingBall(){

	//alert("hi");

	
	 ctx.clearRect(xPos-20,yPos-20,canvas.width,canvas.height);
	//ctx.clearRect(0,0,canvas.width,canvas.height);


	ctx.beginPath();

	ctx.arc(xPos,yPos,10,0,2*Math.PI);
	ctx.fillStyle="red";
	ctx.fill();

	ctx.stroke();

	if(xPos != 0){
		xPos--;
	}


}

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