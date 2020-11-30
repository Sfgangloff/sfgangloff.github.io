let eyeBall = document.querySelector(".eyeball"),
pupil = document.querySelector(".pupil"),
R = 40,
r = 20,
x0=0.895*window.innerWidth ,
y0=0.172*window.innerHeight,
centerX = x0, 
centerY = y0;

//eyeArea = eyeBall.getBoundingClientRect(),
//pupilArea = pupil.getBoundingClientRect(),
//eyeArea.width/2, pupilArea.width/2 ,eyeArea.left + R, eyeArea.top + R

document.addEventListener("mousemove", (e)=>{
	
	let x = e.pageX - centerX,
      	y = e.pageY - centerY,
      	theta = Math.atan2(y,x),
      	angle = theta*180/Math.PI,
	c=((R-r)*(1-Math.exp(-Math.pow(Math.abs(x)+Math.abs(y),0.1)))-5),
      	alpha=c*Math.cos(theta)+121,
      	beta=c*Math.sin(theta)+121,
    	echelle=(Math.sqrt(Math.pow(x,2)+Math.pow(y,2))-c)/200;
  
  	pupil.style.transform = "rotate(" + (angle) + "deg) translateX(" + ((R-r)*(1-Math.exp(-Math.pow(Math.abs(x)+Math.abs(y),0.1)))-5) + "px)";
	pupil.style.transformOrigin =121+"px" + " " + 121 +"px";
    
    	laser.style.transform= " translateX(" + (alpha) + "px) translateY(" + (beta) + "px) rotate(" + (angle) + "deg) scaleX(" + echelle +")";

});

var frame=document.getElementById("robot_image");
var background=document.getElementById("background");
frame.addEventListener("click", (e) =>{laser.style.animation="move_laser 1s 1"; 
setTimeout(function() {laser.style.animation="none";}, 1100);
setTimeout(function() {background.style.cursor="url('files_svg/tinycursor.svg'),auto";}, 750);}); 
