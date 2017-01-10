
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


	 //ctx2.clearRect(xPos-20,yPos-20,canvas.width,canvas.height);
	ctx.clearRect(0,0,canvas.width,canvas.height);


	ctx2.beginPath();

	ctx2.arc(xPos,yPos,10,0,2*Math.PI);
	ctx2.fillStyle="red";
	ctx2.fill();
	ctx2.closePath();

	ctx2.stroke();

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
			//alert(count);
		}


		// right=false;
		// left=true;
	}

	if(xPos<=canvas.width-20 && right==true){
		xPos++;
		if(xPos == canvas.width-20){
			count++;
		}
	}
	// else{
	// 	right=true;
	// }

	// //alert(xPos);
	// if(right ==false){
	// 	xPos--;
	// }
	
	// if(xPos == 20){
	// 	right =true;
	// }
	// else{
	// 	right=false;
	// }
		
	// if(right == true){
	// 	//ctx.clearRect(0,0,canvas.width,canvas.height);

	// 	xPos++;
	// }
		

	

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