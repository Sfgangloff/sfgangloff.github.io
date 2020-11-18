function light() {
         const i=document.getElementById('counter').innerHTML; 
        
        if (i==="0") { var back = document.getElementById('background');
    back.style.filter="brightness(0.25)";
                      document.getElementById('counter').innerHTML=1;
		      document.getElementById('background').style.backgroundImage="url('images/sun1.jpg')";
                   }
        
        
        if (i==="1") { var back = document.getElementById('background');
    back.style.filter="brightness(0.50)";
                        document.getElementById('counter').innerHTML=2;
		        document.getElementById('background').style.backgroundImage="url('images/sun2.jpg')";
                   }
	    
	          if (i==="2") { var back = document.getElementById('background');
    back.style.filter="brightness(0.75)";
                        document.getElementById('counter').innerHTML=3;
				  document.getElementById('background').style.backgroundImage="url('images/sun3.jpg')";
                   }
    
        
          if (i==="3") { var back = document.getElementById('background');
    back.style.filter="brightness(1)";
                        document.getElementById('counter').innerHTML=0;
			  document.getElementById('background').style.backgroundImage="url('images/sun.jpg')";
                   }
        
       
        
    }