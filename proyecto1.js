var sketchProc = function(processingInstance) {

    with (processingInstance) {
      size(700,500);
     
background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate

ellipse(200, 200, 300, 300); 

ellipse(267,200,120,120);
ellipse(178,200,120,120);
ellipse(200,129,120,120);
fill(237, 245, 5);


ellipse(174,207,40,40);
ellipse(197,131,40,40);
ellipse(264,198,40,40);

fill(219, 109, 24);
rect(101,270,190,20);
fill(219, 109, 24);
rect(100,300,190,20);
      
  
    }
  };
  var canvas = document.getElementById("canvas");
   var processing = new Processing(canvas, sketchProc);


