// $(document).ready(function() {
// 	alert("hi");

// });

// $("#click").click(function(){
// 	alert("hi");

// });

// function message(){

// 	alert("hello")
// }

function draw(){
	var c = document.getElementById("canvas");

	var ctx = c.getContext("2d");

	ctx.beginPath();
	ctx.arc(100,75,50,0,2 * Math.PI);
	ctx.fillStyle="blue";
	ctx.fill();


	ctx.stroke();
}