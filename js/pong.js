


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

	if(count%2==0){
		left =true;
		right=false;
	}
	else{
		left =false;
		right=true;
	}

	if(xPos  >= 10 && left==true){
		xPos--;

		if(xPos==10){
			count++;
		}
	}

	if(xPos<=canvas.width-10 && right==true){
		xPos++;
		if(xPos == canvas.width-10){
			count++;
		}
	}

	if(upPressed==true){
		y-=20;
		alert("Hi");
	}

	if(downPressed==true){
		y+=20;
	}

	console.log("x = " + x + " xPos= " + xPos + " y =" +y + " yPos =" + yPos);

	if(Math.abs(x -xPos) <= 11 && Math.abs(y-yPos) <=50){
		count++;
	//	alert("hit");
	}

	if(xPos==10){
		//alert("miss");
	}

}
	$(document).keydown(function(event){
		
		if(event.keyCode==38){
			y-=1;
			upPressed=true;
		}

	
		if(event.keyCode==40){
			y+=1;
			downPressed=true;
		}
	});



setInterval(draw,10);