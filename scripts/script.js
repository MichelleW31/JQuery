$(document).ready(function(){
  var tables = $("#table");

  //Creates tables and classes
  for(var i=0; i<9; i++){
    tables.append("<div><p>" + (i+1) + "</p></div>");
  }
  $("#table div").attr("class","tabledivs available");

  //brings up form and enters table number text
  $(".tabledivs").click(function(){
    $("#seatforminfo p").text("Table Number : " + $(this).text());
    $("#seatform").toggle(true);
    $(this).attr("class", "tabledivs  reserved").attr("clicked","yes");
  });

  //Exits out of form
  $("img").click(function(){
    $("#seatform").toggle(false);
    $(".tabledivs").filter('[clicked]').attr("class", "tabledivs  available");
  });

  //Saves reservation and changes the table to be reserved
  $("#seatforminfo button").click(function(){
    var name = $("#name").val();
    console.log(name.length);
    if(name.length <= 0){
      $(".tabledivs").filter('[clicked]').attr("class", "tabledivs  available");
    }
    $("#seatform").toggle(false);
  });



});/*End of document ready*/
