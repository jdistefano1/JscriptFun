$(function () {
    
    // start up code goes here
   // alert("this works!");
    //jQuery(document).ready(function(){$.document.fadeout(500).fadein(500);

    $("#title").text("Yay, I can now get at the H1 immediately!");
   // $("#title").text.fadeout(500);

    $("#first").html("<h2>Great quotes</h2>");
    

    // append and prepend work INSIDE the given selection
    $("#first").prepend("<h2>Great quotes</h2>");
    $("#first").append("<h3>... for your to ponder ... </h3>");

    // before, after, insertBefore, insertAfter work OUTSIDE
    // the given selection.
   // $("#first").fadeout(100);
    

    $("#myAnchor").attr("href", "http://channel9.msdn.com");

    $("#title").addClass("standout");

});



