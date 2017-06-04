
//Setting up the canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

//Initial Position of the Paddle
var paddleX = 10;
var paddleY = 50;

//Count determines which direction the ball is moving 
//It is incremented each time the ball collides with the paddle
var count = 0; 

//ballX and ballY is the initial starting position of the ball
var ballX = canvas.width-10;
var ballY = canvas.height/2; 

//these are the flags which determine what direction the ball is going in
//By default, left is true
var left = true;
var right = false;

var xClick=1;
var yClick=1;

var upPressed = false;
var downPressed = false;
// var upCollide=false;
// var downCollide=false;

var bounceFromTop = true;
var bounceFromBottom = false;

// var ballSpeed=2;

var start = true;
var lose = false;

//Event Handlers
//When the up key is pressed, the upPressed flag is to set to true 
//Similarly, when the down key is pressed, the downPressed flag is to true
$(document).keydown(function(event){
	
	if(event.keyCode==38){
		upPressed = true;
	}

	if(event.keyCode==40 ){
		downPressed = true;
	}
});

//Event Handlers
//When the up key is released, the upPressed flag is to set to false
//Similarly, when the down key is released, the downPressed flag is set to false 
$(document).keyup(function(event){
	
	if(event.keyCode == 38){
		upPressed = false;
	}

	if(event.keyCode==40){
		downPressed=false;
	}
});


//Event Handlers
//Detects the x and y position when you click on the canvas
//It calculates the offset of the click so the x and y positions are relative to the canvas
//Not used in the program but for testing and determining the x and y positions
$("#canvas").bind("click", function(event){
	
	var $div = $(event.target);

	var offset = $div.offset();

	xClick = event.clientX-offset.left;
	yClick = event.clientY-offset.top;

	alert(xClick + " " + yClick);

});

//Lost function clears the canvas and displays a message when the player loses
function lost(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.font = "30px Arial";
    ctx.fillText("Game Over!",150,canvas.height/2);
    ctx.fillText("Play Again?",150,(canvas.height/2)+50)
    //ctx.rect(150,(canvas.height/2)+10, 50,20);
    ctx.fillStyle="red"
    ctx.fill();
    ctx.closePath();
}





function drawBall(){
	ctx.beginPath();

	ctx.arc(ballX,ballY,10,0,2*Math.PI);
	ctx.fillStyle="red";
	ctx.fill();
	ctx.closePath();

	ctx.stroke();
}

function drawPaddle(){
	ctx.beginPath();
	ctx.rect(paddleX, paddleY,10,40);
	ctx.fillStyle="blue";
	ctx.fill();
	ctx.closePath();
}

//Moves the paddle up or down depending on which key is pressed
//Increases or decreases the Y coordinates if up or down is pressed
function movePaddle(){

	//Moving the paddle up
	if(upPressed && paddleY >= 0){
		paddleY -= 5;
	}
	//Moving the paddle down
	if(downPressed && paddleY <= canvas.height- 40){
		paddleY += 5;
	}

}

function bounce(){
	if(ballY == canvas.height - 10){
		ballY -= 6;
	}

	if(ballY == 10){
		ballY -= 1;
	}
}

function moveBall(){
	if(start){
		if(ballX > 10 && left){
			ballX -= 1;
			
		}

		if(ballY == canvas.height - 10){
			bounceFromBottom = true;
			bounceFromTop = false;
		}

		if(ballY == 10){
			bounceFromTop = true;
			bounceFromBottom = false;
		}

		if(bounceFromBottom){
			ballY -= 1;
		}

		if(bounceFromTop){
			ballY += 1;
		}

	}
}

function draw(){
	
	if(lose === false){

	//	console.log("ballX " + ballX + "left " +left + "count " + count);

		ctx.clearRect(0,0,canvas.width,canvas.height);

		drawPaddle();
		drawBall();
		movePaddle();
		moveBall();

		


		// if(start==true){
		// 	ballY++;
		// }

		// if(count%2==0){
		// 	left =true;
		// 	right=false;
		// }
		// else{
		// 	left =false;
		// 	right=true;
		// }

	//	console.log(ballSpeed);

		//Moving the ball left 
		// if(ballX  >= 10 && left==true){
		// 	ballX-=ballSpeed;
		// 	//ballX-=3;

		// 	console.log("ballX " + ballX + "left is " + left + " right is " + right + " count is " + count );

		// 	//When the ball reaches x Position 10, increment a counter.
		// 	// When the counter is odd the ball moves right.

		// 	if(ballX==10){
		// 		left = false;
		// 		right = true;
		// 		count++;
		// 	}
		// }

		//Moving the Ball Right 
		// if(ballX<=canvas.width-10 && right==true){
		// 	ballX+=ballSpeed;
		// 	//ballX+=3;
		// 	//alert("error");
		// 	var z = canvas.width -10;
		// 	console.log("ballX " + ballX + "left is " + left + " right is " + right + " count is " + count + "canvas width " + z);

		// 	if(ballX == canvas.width-50){
		// 		console.log("right wall hit");
		// 		count++;
		// 		right = false;
		// 		left = true;
		// 	}
		// }



		
		//console.log("x = " + x + " ballX= " + ballX + " y =" +y + " ballY =" + ballY);

		// if(Math.abs(paddleX -ballX) <= 11 && Math.abs(paddleY-ballY) <=50){
			
		// 	if(upPressed == true){
		// 		upPressed = false;
		// 		upCollide=true;
		// 		alert("paddle hit");
		// 		//ballY-=10;

		// 	}

		// 	ballSpeed++;


		// 	if(downPressed == true){
		// 		downPressed = false;
		// 		downCollide=true;
		// 		//ballY+=10;
		// 	}
		// 	count++;
		// //	alert("hit");

			
		

		// 	// if(ballY==27){
		// 	// 	console.log("upCollide " + upCollide + " downCollide " + downCollide + "count " +count);
		// 	// }

		// //console.log(ballY);
		// 	//console.log("upCollide " + upCollide + " downCollide " + downCollide + "count " +count);
		// }

		// if(ballX==10){
		// 	//alert("miss");
		// 	lose=true;

		// }


		// if(upCollide==true){
		// 	ballY--;
		// }
		// if(downCollide==true){
		// 	ballY++;
		// }

		// if(ballY == 10){
		// //	alert("bounce top");
		// 	bounceFromTop=true;
		// 	bounceFromBottom=false;
			
		// 	upCollide=false;
		// }

		// if(ballY == canvas.height-10){
		// 	//alert("bounce bottom");
		// 	bounceFromBottom=true;
		// 	bounceFromTop=false;

		// 	downCollide=false;
		// }
		// if(bounceFromTop ==true){
		// 	ballY++;

		// }

		// if(bounceFromBottom == true){
		// 	ballY--;
		// 	start=false;
		// }

	}
	else{
	//	console.log(ballX);
		lost();
		playAgain();

	


	}

	//console.log("ballX " + " " + ballX + " ballY " + ballY );


	
}

function playAgain(){

		if(lose==true && xClick !=1){
		lose = false;
		//alert(xClick);
	}


}






setInterval(draw,10);