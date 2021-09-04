// Create a reference for the canvas
canvas=document.getElementById('myCanvas');
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;
background_image="mars.jpg";
rover_image="rover.png";

function add() {
	background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	{ if(rover_y >=0) { rover_y = rover_y - 10; console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y); uploadBackground(); uploadrover(); } }  

}
function numberkey()
{
	{ if(rover_y <=500) { rover_y =rover_y+ 10; console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y); uploadBackground(); uploadrover(); }  
}
function arrowkey()
{
	{ if(rover_x >= 0) { rover_x =rover_x - 10; console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y); uploadBackground(); uploadrover(); } }  { if(rover_x <= 700) { rover_x =rover_x + 10; console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y); uploadBackground(); uploadrover(); } }
}
function specialkey()
{
	{ if(rover_x <= 700) { rover_x =rover_x + 10; console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y); uploadBackground(); uploadrover(); } }
}
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
