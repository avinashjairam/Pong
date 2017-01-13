


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
var downPressed=true;








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

	if(xPos  >= 20 && left==true){
		xPos--;

		if(xPos==20){
			count++;
		}
	}

	if(xPos<=canvas.width-20 && right==true){
		xPos++;
		if(xPos == canvas.width-20){
			count++;
		}
	}

	if(upPressed=true){
		y-=30;
	}

	if(downPressed=true){
		y+=30;
	}

}
	$(document).keypress(function(event){
		if(event.keyCode==37){
			x-=5;
		//	console.log(x);
		}
		if(event.keyCode==38){
			y-=1;
			upPressed=true;
		//	console.log(y);
		}

		if(event.keyCode==39){
			x+=1;
			alert(x);
		//	console.log(x);
		}
		if(event.keyCode==40){
			y+=1;
			downPressed=true;
		//	console.log(y);
		}
	});



setInterval(draw,10);