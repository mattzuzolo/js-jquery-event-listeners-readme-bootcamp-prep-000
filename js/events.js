//define functions here

function getIt () {
  
  $('p').on("click", function() {
    
      alert("Hey!");    
    
  }); //close parentheses here for jquery thing
}

function frameIt () {
  $('#tasty').on('load', function() {
    $("div img").addClass("tasty");
    
  }); //close parentheses here for jquery thing
  
}
    
function pressIt () {
  
  $(document).on('keydown', function(key) {
    if (key.which == 71) {
      alert("You pressed 'G'");
      
    }
  }); //close parentheses here for jquery thing
  
}







$(document).ready(function(){

// call functions here

});
