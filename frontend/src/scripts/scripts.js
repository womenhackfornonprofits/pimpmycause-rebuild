$(document).foundation();

$(window).on("load", function() {
    
    
//  ********** 
//  HERO PANEL 
//  ********** 
    
//  rotating the cubes on the front hero panel using a timer
    
    var loop_condition = true;
    
    var topLeft = $(".cube").eq(0);
    var topRight = $(".cube").eq(1);
    var bottomLeft = $(".cube").eq(2);
    var bottomRight = $(".cube").eq(3);
    
    setInterval(function () {
        
        if (loop_condition) {
            topLeft.toggleClass("active");
            bottomRight.toggleClass("active");
        } else {
            topRight.toggleClass("active");
            bottomLeft.toggleClass("active");
        }
        loop_condition = !loop_condition;

    }, 2000);
    
    
//  ******************************* 
//  SUMMARY - HAVE YOU SEEN - PANEL 
//  ******************************* 
    
//  toggle click-event class to element to perform slide up functionality displaying summary info on click
      
    $('.summary-title').on('click', function () {
        $(this).toggleClass('click-event');
    });
    
});