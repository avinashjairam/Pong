
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
			ballX -= ballSpeed;
			
		}

		if(ballY >= canvas.height - 10){
			bounceFromBottom = true;
			bounceFromTop = false;
		}

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
			lost();
		}

		//If the ball collides with the paddle, set left to false and set right to true 
		//increase the ball speed by 1
		if(Math.abs(paddleX - ballX) <= 11 && Math.abs(paddleY - ballY) <= 30 ){
			left = false;
			right = true;
			ballSpeed += 1;
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

function draw(){
	
	if(lose === false){

		ctx.clearRect(0,0,canvas.width,canvas.height);

		drawPaddle();
		drawBall();
		movePaddle();
		moveBall();
	}
	else{
	//	console.log(ballX);
		lost();
		//newGame();

	}

}

function newGame(){
	alert("button clicked");

	if(lose && xClick !=1){
		lose = false;
	}
}






setInterval(draw,10);