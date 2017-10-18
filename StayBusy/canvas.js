var canvas = document.querySelector('canvas');
var q = document.getElementById("leftside");

//canvas.height = 

console.log(canvas.width);
console.log(canvas.height);


var c = canvas.getContext('2d'); //gets canvas context and store in var c to be used for all drawings
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100); // takes four args (x, y, width, height)
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(300, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.9)';
// c.fillRect(100, 400, 100, 100);
// c.fillStyle = 'rgba(0, 0, 0, 0.5)';
// c.fillRect(200, 200, 100, 100);
// console.log(canvas);

// //line
// c.beginPath(); // telling the canvas we want to start a path
// c.moveTo(50, 300); //takes a (x, y) coordinates indicating position 
// c.lineTo(300, 100); //creates where the line will move to
// c.lineTo(400, 300);
// c.strokeStyle = "#FA67EC"; //add colors to the line
// c.stroke(); //creates the line and makes it visible

// //arc/circle
// c.beginPath(); // makes sure the circle is not joined to the previous line created
// c.arc(300, 300, 30, 0, Math.PI *2, false); //Takes so many variables x:int, y: int, r: int, startAngle: float, endAngle: float, drawCounterClockwise: Bool (false)
// c.strokeStyle = 'Blue';
// c.stroke(); //draws the arc/circle

// //drawing multiple circles
// for (var i = 0; i<7; i++) {
// 	//creates random circles extending all across the entire width and height of the page
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	c.beginPath();
// 	c.arc(x, y, 30, 0, Math.PI *2, false);
// 	c.strokeStyle = 'Blue';
// 	c.stroke();
// }

//to create bouncing circle that bounces off the edge of the screen

var colorArray = ['#1BE395', '#2D3CDB', '#F2269A', '#DB9A4C', '#D3F41A'];

function Circle (x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;  
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = colorArray[Math.floor(Math.random()* colorArray.length)];

	this.draw = function () {
	c.beginPath();
	c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
	c.fillStyle = '#FFFFFF';
	c.fill(); 

	}



	this.update = function(){
		if (this.x + this.radius > canvas.width || this.x - this.radius < 0){ 
		this.dx = -this.dx; 
	}
		if (this.y + this.radius > canvas.height || this.y - this.radius < 0){ 
		this.dy = -this.dy; 
	}

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	
	}
}



var circleArray = [];

for (var i = 0; i <20; i++) {
	var radius = Math.random() *20;
	var x = Math.random() * (canvas.width - radius*2) + radius;
	var y = Math.random() * (canvas.height - radius*2) + radius;
	var dx = (Math.random() - 0.5) * 3;
	var dy = (Math.random() - 0.5) * 3;
	
	circleArray.push(new Circle(x, y, dx, dy, radius));
	   

}


 

function animate(){
	requestAnimationFrame(animate);  //creating animate loop
	c.clearRect(0, 0, canvas.width, canvas.height); //takes four arguments like fillRect
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
	

	
	
	
}

animate();