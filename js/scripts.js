//user interface logic
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
    event.preventDefault();
    var pingPongInput = parseInt($("input#number").val());
    var result = pinPongize(pingPongInput);
    $(".result").text(result);
  });
});
