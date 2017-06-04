


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

var xClick=1;
var yClick=1;

var upPressed=false;
var downPressed=false;
var upCollide=false;
var downCollide=false;

var bounceFromTop = false;
var bounceFromBottom = false;

var ballSpeed=2;

var start=true;
var lose = false;

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

$("#canvas").bind("click", function(event){
	
	var $div = $(event.target);

	var offset = $div.offset();

	 xClick = event.clientX-offset.left;
	 yClick = event.clientY-offset.top;



	//alert(xClick + " " + yClick);

});

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

	if(lose==false){

	//	console.log("xpos " + xPos + "left " +left + "count " + count);

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

	//	console.log(ballSpeed);

		//Moving the ball left 
		if(xPos  >= 10 && left==true){
			xPos-=ballSpeed;
			//xPos-=3;

			console.log("xpos " + xPos + "left is " + left + " right is " + right + " count is " + count );

			//When the ball reaches x Position 10, increment a counter.
			// When the counter is odd the ball moves right.

			if(xPos==10){
				left = false;
				right = true;
				count++;
			}
		}

		//Moving the Ball Right 
		if(xPos<=canvas.width-10 && right==true){
			xPos+=ballSpeed;
			//xPos+=3;
			//alert("error");
			var z = canvas.width -10;
			console.log("xpos " + xPos + "left is " + left + " right is " + right + " count is " + count + "canvas width " + z);

			if(xPos == canvas.width-50){
				console.log("right wall hit");
				count++;
				right = false;
				left = true;
			}
		}



		//Moving the paddle up


		if(upPressed==true && y >= 0){
			y-=5;
			//alert("Hi");
		}

		//Moving the paddle down

		if(downPressed==true && y <= canvas.height- 40){
			y+=5;
		}

		//console.log("x = " + x + " xPos= " + xPos + " y =" +y + " yPos =" + yPos);

		if(Math.abs(x -xPos) <= 11 && Math.abs(y-yPos) <=50){
			
			if(upPressed == true){
				upPressed = false;
				upCollide=true;
				alert("paddle hit");
				//yPos-=10;

			}

			ballSpeed++;


			if(downPressed == true){
				downPressed = false;
				downCollide=true;
				//yPos+=10;
			}
			count++;
		//	alert("hit");

			
		

			// if(yPos==27){
			// 	console.log("upCollide " + upCollide + " downCollide " + downCollide + "count " +count);
			// }

		//console.log(yPos);
			//console.log("upCollide " + upCollide + " downCollide " + downCollide + "count " +count);
		}

		if(xPos==10){
			//alert("miss");
			lose=true;

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
	else{
	//	console.log(xPos);
		lost();
		playAgain();

	


	}

	//console.log("xPos " + " " + xPos + " yPos " + yPos );


	
}

function playAgain(){

		if(lose==true && xClick !=1){
		lose = false;
		//alert(xClick);
	}


}






setInterval(draw,10);