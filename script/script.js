/*Empty Javascript page*/

$(document).ready(function(){

  // Your code here.
  $( "img.imagepic" ).mouseover(function() {
   
    this.src = this.src.replace("old", "new");

  })
  

  // Your code here.
  $( "img.imagepic" ).mouseout(function() {

    this.src = this.src.replace("new", "old");

  })

});