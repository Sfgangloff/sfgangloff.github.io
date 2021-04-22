img = document.getElementById("ubuntu");

function enlargeImg() {
	img.style.transform = "scale(2.5)";
        img.style.transition = "transform 0.5s ease";
      }
      
function reduceImg() {
	event.stopPropagation();
	img.style.transform = "scale(1)";
        img.style.transition = "transform 0.5s ease";
      }
