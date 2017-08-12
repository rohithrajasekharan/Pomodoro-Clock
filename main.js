$(document).ready(function() {
var sessionLength = 25;
var breakLength = 5;
var session=parseInt($("#timer-session").html());
var breaknum=parseInt($("#timer-break").html());
$("#addSec").on("click", function(){
       sessionLength += 1;
       $("#timer-session").text(sessionLength);
       $("#timeLeft").text(sessionLength);
})

$("#dedSec").on("click", function(){
    if (sessionLength > 1){
        sessionLength -= 1;
    } else {
        sessionLength = 1;
    }
    $("#timer-session").text(sessionLength);
    $("#timeLeft").text(sessionLength);
})
$("#dedBreak").on("click",function(){
    if (breakLength > 1){
        breakLength -= 1;
    } else {
        breakLength = 1;
    }
    $("#timer-break").text(breakLength);
   breaknum=parseInt($("#timer-break").html());
})
$("#addBreak").on("click",function(){
    breakLength += 1;
    $("#timer-break").text(breakLength);
   breaknum=parseInt($("#timer-break").html());
})
  $("#start").on("click",function(){
        sessionLength*=60;
      var counter=setInterval(timer,1000);
  function timer(){
        sessionLength-=1;
    if (sessionLength%60>=10) {
      $("#timeLeft").html(Math.floor(sessionLength/60)+":"+sessionLength%60);
    }
    else {
      $("#timeLeft").html(Math.floor(sessionLength/60)+":"+"0"+sessionLength%60);
    }
    $("#reset").on("click",function(){
      counter=clearInterval(counter);
    })
    if(sessionLength==0){
      sessionLength=breaknum;
      counter=clearInterval(counter)
      $("#timeLeft").text("Time's up!");
      var breakCount=setInterval(breaker,1000);
      sessionLength*=60;
      function breaker(){
        $("#reset").on("click",function(){
          breakCount=clearInterval(breakCount);
        })
        sessionLength-=1;
        if (sessionLength%60>=10) {
          $("#timeLeft").html(Math.floor(sessionLength/60)+":"+sessionLength%60);
        }
        else {
          $("#timeLeft").html(Math.floor(sessionLength/60)+":"+"0"+sessionLength%60);
        }
        $("#game").text("Break ends in:");
        if(sessionLength==0){
          breakCount=clearInterval(breakCount);
          $("#timeLeft").text("break's over");
  }
}
}
}
})
$("#reset").on("click",function(){
  sessionLength=25;
  breaknum=5;
  $("#timer-break").html(breaknum);
  $("#timer-session").html(sessionLength);
    $("#timeLeft").html(sessionLength);
})
})
