
var c = document.getElementById("canvas");

var ctx = c.getContext("2d");

var x = 40;
var y = 40;

var count = 0; 


var ctx2 = c.getContext("2d");


var xPos = canvas.width-10;
var yPos = canvas.height/2; 
var left = false;
var right = true;

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
	ctx.rect(10,canvas.height/2,10,40);
	ctx.fillStyle="blue";
	ctx.fill();
	ctx.closePath();
}




function draw(){

	ctx.clearRect(0,0,canvas.width,canvas.height);

	drawPaddle();
	drawBall();

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

	// ctx.beginPath();

	// ctx.rect(0,0,canvas.width,canvas.height);
	// ctx.fillStyle="green";
	// ctx.fill();

	// ctx.arc(x,y,20,0,2 * Math.PI);
	// ctx.fillStyle="blue";
	// ctx.fill();
	// ctx.closePath();


	// ctx.stroke();

	// setInterval(movingBall,10);
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


	 //ctx2.clearRect(xPos-20,yPos-20,40,40);
	ctx.clearRect(0,0,canvas.width,canvas.height);


	ctx.beginPath();

	ctx.arc(xPos,yPos,10,0,2*Math.PI);
	ctx.fillStyle="red";
	ctx.fill();
	ctx.closePath();

	ctx.stroke();

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
}

$(document).keypress(function(event){
	if(event.keyCode==37){
		if(x > 20){
			//ctx.clearRect(0,0,canvas.width,canvas.height);
			x-=5;
			// ctx.beginPath();
			// ctx.arc(x,y,20,0,2 * Math.PI);
			// ctx.fillStyle="blue";
			// ctx.fill();
			// ctx.closePath();
			// ctx.stroke();
		}
	}
	if(event.keyCode==38){
		if(y > 20){
			//ctx.clearRect(0,0,canvas.width,canvas.height);
			y-=5;
			// ctx.beginPath();
			// ctx.arc(x,y,20,0,2 * Math.PI);
			// ctx.fillStyle="blue";
			// ctx.fill();
			// ctx.closePath();
			// ctx.stroke();
		}
			
	}

	if(event.keyCode==39){
		if( x < canvas.width -20){
			//ctx.clearRect(0,0,canvas.width,canvas.height);
			x+=5;
			// ctx.beginPath();
			// ctx.arc(x,y,20,0,2 * Math.PI);
			// ctx.fillStyle="blue";
			// ctx.fill();
			// ctx.closePath();
			// ctx.stroke();
		}
	}
	if(event.keyCode==40){
		if ( y < canvas.height -20){
			//ctx.clearRect(0,0,canvas.width,canvas.height);
			y+=5;
			// ctx.beginPath();
			// ctx.arc(x,y,20,0,2 * Math.PI);
			// ctx.fillStyle="blue";
			// ctx.fill();
			// ctx.closePath();
			// ctx.stroke();
		}
	}

//  alert(String.fromCharCode(event.which) + " " + event.keyCode); 
});

setInterval(draw(),10);