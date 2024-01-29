var b=Math.random();
var c=Math.random();

if(b<=0.16){
    var img=document.getElementById("img1");
    img.src="dice1.png";
   
   }
   if(b>0.16&&b<=0.32){
    var img=document.getElementById("img1");
    img.src="dice2.png";
   
   }
   if(b>0.32&&b<=0.48){
    var img=document.getElementById("img1");
    img.src="dice3.png";
   
   }
   if(b>0.48&&b<=0.64){
    var img=document.getElementById("img1");
    img.src="dice4.png";
   
   }
   if(b>0.64&&b<=0.80){
    var img=document.getElementById("img1");
    img.src="dice5.png";
   
   }
   if(b>0.80){
    var img=document.getElementById("img1");
    img.src="dice6.png";
   
   }
   if(c<=0.16){
    var img=document.getElementById("img2");
    img.src="dice1.png";
   
   }
  
      if(c>0.16&&c<=0.32){
       var img=document.getElementById("img2");
       img.src="dice2.png";
      
      }
      if(c>0.32&&c<=0.48){
       var img=document.getElementById("img2");
       img.src="dice3.png";
      
      }
      if(c>0.48&&c<=0.64){
       var img=document.getElementById("img2");
       img.src="dice4.png";
      
      }
      if(c>0.64&&c<=0.80){
       var img=document.getElementById("img2");
       img.src="dice5.png";
      
      }
      if(c>0.80){
       var img=document.getElementById("img2");
       img.src="dice6.png";
      
      }
   if(b>c){
    document.getElementById("game").innerHTML="player 1 won the game";
   }
else if(b==c){
    document.getElementById("game").innerHTML="match is draw refresh the page";

}
else{
    document.getElementById("game").innerHTML="player 2 won the game";

}