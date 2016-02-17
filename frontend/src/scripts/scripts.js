$(document).foundation();

$(window).on("load", function() {
    
    // rotating the cubes on the front hero panel using a timer
    
    var x = true;
    
    var topLeft = $(".cube").eq(0);
    var topRight = $(".cube").eq(1);
    var bottomLeft = $(".cube").eq(2);
    var bottomRight = $(".cube").eq(3);
    
    setInterval(function () {
        
        if (x) {
            topLeft.toggleClass("active");
            bottomRight.toggleClass("active");
        } else {
            topRight.toggleClass("active");
            bottomLeft.toggleClass("active");
        }
        x = !x;

    }, 2000);
    
});