$(document).ready(function(){
  var tables = $("#table");
  var container;
  var oldText;
  var name;
  var size;

  //Creates tables and classes
  for(var i=0; i<9; i++){
    tables.append("<div>" + (i+1) + "</div>");
  }
  $("#table div").attr("class","tabledivs available");

  //brings up form and enters table number text
  $(".tabledivs").on("click",function(){
    $("#seatforminfo p").text("Table Number : " + $(this).text());
    $("#seatform").slideDown();
    container = $(this);
  });

  //Exits out of form
  $("img").on("click",function(event){
    $("#seatform").fadeOut();
    $("form").find("input:text").val("");
  });

  //Saves reservation and changes the table to be reserved
    $("#seatforminfo button").on("click",function(){
        name = $("#name").val();
        size = $("#size").val();
        container.attr("name",name);
        container.attr("size",size);
        container.addClass("reserved");
        container.removeClass("available");
        $("#seatform").slideUp();
        $(".reserved").css("background-color", "#adaaaa");
        $("form").find("input:text").val("");
        container.css("cursor", "not-allowed");
        container.off("click");
    });


    //PART 2

    //Gets value of Name input
    $(".tabledivs").on("mouseenter",function(event){
      name = $(this).attr("name");
      size =$(this).attr("size");
      oldText = $(this).text();
      if($(this).hasClass("reserved")){
        $(this).append("<div><p> Name: " +name + "<br>Size of Party: " +size+ "<p></div>");
        $(".reserved div").attr("class","displaydiv");
    }
    }).on("mouseleave",function(event){
      $(this).text(oldText);
    });


    // function creatediv(){
    //     if($(".tabledivs").hasClass("reserved")){
    //       name = $(this).attr("name");
    //       size =$(this).attr("size");
    //       $(this).append("<div><p>Name: " + name + "</p><div>");
    //       $("div p").after("<p>Size of Party: " + size + "</p>");
    //       $(".reserved div").attr("class","displaydiv");
    //       console.log(name);
    //       console.log(size);
    //   }
    // }


    $(".tabledivs").on("mouseenter",function(){
      if($(this).hasClass("reserved")){
        $(".displaydiv").toggle(true);
      }
    }).on("mouseleave",function(event){
        $(".displaydiv").toggle(false);
    });


});/*End of document ready*/
