


var c = document.getElementById("canvas");

var ctx = c.getContext("2d");

var x = 10;
var y = 50;

var count = 0; 


var ctx2 = c.getContext("2d");


var xPos = canvas.width-10;
var yPos = canvas.height/2; 
var left = false;
var right = true;

var upPressed=false;
var downPressed=false;
var upCollide=false;
var downCollide=false;

var bounceFromTop = false;
var bounceFromBottom = false;

var start=true;

$(document).keydown(function(event){
	
	if(event.keyCode==38){
		//y-=1;
		upPressed=true;
	}


	if(event.keyCode==40 ){
		//y+=1;
		downPressed=true;
	}
});

$(document).keyup(function(event){
	
	if(event.keyCode==38){
		//y-=1;
		upPressed=false;
	}


	if(event.keyCode==40){
		//y+=1;
		downPressed=false;
	}
});






function drawBall(){
	ctx.beginPath();

	ctx.arc(xPos,yPos,10,0,2*Math.PI);
	ctx.fillStyle="red";
	ctx.fill();
	ctx.closePath();

	ctx.stroke();
}

function drawPaddle(){
	ctx.beginPath();
	ctx.rect(x,y,10,40);
	ctx.fillStyle="blue";
	ctx.fill();
	ctx.closePath();
	//alert("drawPaddel callded");
}




function draw(){
	//alert("hi");
	ctx.clearRect(0,0,canvas.width,canvas.height);

	drawPaddle();
	drawBall();
	//alert(x);

	if(start==true){
		yPos++;
	}

	if(count%2==0){
		left =true;
		right=false;
	}
	else{
		left =false;
		right=true;
	}

	//Moving the ball left 
	if(xPos  >= 10 && left==true){
		xPos--;


		//When the ball reaches x Position 10, increment a counter.
		// When the counter is odd the ball moves right.

		if(xPos==10){
			count++;
		}
	}

	//Moving the Ball Right 
	if(xPos<=canvas.width-10 && right==true){
		xPos++;
		if(xPos == canvas.width-10){
			count++;
		}
	}

	if(upPressed==true && y >= 0){
		y-=5;
		//alert("Hi");
	}

	if(downPressed==true && y <= canvas.height- 40){
		y+=5;
	}

	console.log("x = " + x + " xPos= " + xPos + " y =" +y + " yPos =" + yPos);

	if(Math.abs(x -xPos) <= 11 && Math.abs(y-yPos) <=50){
		
		if(upPressed == true){
			upCollide=true;
			//yPos-=10;

		}

		if(downPressed == true){
			downCollide=true;
			//yPos+=10;
		}
		count++;
	//	alert("hit");
	}

	if(xPos==10){
		//alert("miss");
	}


	if(upCollide==true){
		yPos--;
	}
	if(downCollide==true){
		yPos++;
	}

	if(yPos == 10){
	//	alert("bounce top");
		bounceFromTop=true;
		bounceFromBottom=false;
		
		upCollide=false;
	}

	if(yPos == canvas.height-10){
		//alert("bounce bottom");
		bounceFromBottom=true;
		bounceFromTop=false;

		downCollide=false;
	}
	if(bounceFromTop ==true){
		yPos++;
	}

	if(bounceFromBottom == true){
		yPos--;
		start=false;
	}

}




setInterval(draw,10);