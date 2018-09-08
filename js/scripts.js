//business logic
var pinPongize = function(pingPongInput){
var pingPongOutput = [];
  for (var i = 1; i <= pingPongInput; i++) {
     pingPongOutput.push(i);
}
return pingPongOutput.join();
}
//user interface logic
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
    event.preventDefault();
    var pingPongInput = parseInt($("input#number").val());
    var result = pinPongize(pingPongInput);
    $(".result").text(result);
  });
});
