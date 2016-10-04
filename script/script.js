/*Empty Javascript page*/

$(document).ready(function(){

  // Your code here.
  $( "img.imagepic" ).mouseover(function() {

    var tmp = this.src.replace("old", "new");
    //tmp = tmp.replace("old", "new");

    
    this.src=tmp;
    //console.log (this.src);


  })
  

  // Your code here.
  $( "img.imagepic" ).mouseout(function() {

    var tmp = this.src.replace("new", "old");
    //tmp = tmp.replace("old", "new");

    
    this.src=tmp;
    //console.log (this.src);


  })

});