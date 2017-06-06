
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

//Flags which indicate the direction of the bounce of the ball
//If bounceFromTop is true then the ball will 'bounce off the top of the canvas' and vice versa
var bounceFromTop = true;
var bounceFromBottom = false;

var ballSpeed = 2;

var start = true;
var lose = false;

var score = 0; 

//Event Handlers
//When the up key is pressed, the upPressed flag is to set to true 
//Similarly, when the down key is pressed, the downPressed flag is to true
$(document).keydown(function(event){
	
	if(event.keyCode == 38){
		upPressed = true;
	}

	if(event.keyCode == 40 ){
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

	if(event.keyCode == 40){
		downPressed = false;
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
	lose = true;
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.font = "30px Arial";
    ctx.fillText("Game Over!",canvas.width/2 - 100,canvas.height/2);
    ctx.fillText("Score: " + score,canvas.width/2 - 100,canvas.height/2 + 40);
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
	ctx.rect(paddleX, paddleY,10,90);
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

		//Moving the ball left if its x coordinate is > 10 and left flag set to true
		if(ballX > 10 && left){
			ballX -= ballSpeed;
			
		}

		//If the ball hits the bottom of the canvas, set the bounceFromBottom to true and
		// bounceFromTop to false. This allows the ball to bounce from bottom to top
		if(ballY >= canvas.height - 10){
			bounceFromBottom = true;
			bounceFromTop = false;
		}

		//If the ball hits the top of the canvas, set the bounceFromTop to true and 
		//bounceFromBottom to tfalse. This allows the ball to bounce from top to bottom
		if(ballY <= 10){
			bounceFromTop = true;
			bounceFromBottom = false;
		}

		if(bounceFromBottom){
			ballY -= ballSpeed;
		}

		if(bounceFromTop){
			ballY += ballSpeed;
		}

		if(ballX <= 10){
			alert("paddleX " + paddleX + " ballX " + ballX + " paddleY " + paddleY + " ballY " + ballY);
			lost();
		}

		//If the ball collides with the paddle, set left to false and set right to true 
		//increase the ball speed by 1
		if(Math.abs(paddleX - ballX) <= 10 && Math.abs(paddleY - ballY) <= 70 ){
			left = false;
			right = true;
			ballSpeed += 0.5;

			score++;

			//alert("collision");
		}

		if(right){
			//alert('move right');
			ballX += ballSpeed;
		}

		if(right && ballX >= canvas.width-10){
			//alert("right wall collision");
			right = false;
			left = true;
		}

	}
}

//Main function where everything happens

function draw(){
	
	if(lose === false){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		drawPaddle();
		drawBall();
		movePaddle();
		moveBall();
		updateScore();
	}
	else{
		lost();
	}

}

//This function prints the score on the canvas
function updateScore(){
	ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, canvas.width - 150 , 20);
    ctx.fillStyle="red"
    ctx.fill();
    ctx.closePath();
}


//Game Loop Function. Resets all the variables and starts the game over
function newGame(){
		paddleX = 10;
		paddleY = 50;

		//ballX and ballY is the initial starting position of the ball
		ballX = canvas.width-10;
		ballY = canvas.height/2; 

		//these are the flags which determine what direction the ball is going in
		//By default, left is true
		left = true;
		right = false;

		upPressed = false;
		downPressed = false;

		//Flags which indicate the direction of the bounce of the ball
		//If bounceFromTop is true then the ball will 'bounce off the top of the canvas' and vice versa
		bounceFromTop = true;
 		bounceFromBottom = false;

		ballSpeed = 2;
		start = true;
		lose = false;
		score = 0; 
}

//The setInterval method calls the draw function every 10 milliseconds 
setInterval(draw,10);