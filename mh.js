//sticky navbar 
window.onscroll = function() { myFunction() };

var navbar = $(".navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.addClass("sticky")
    } else {
        navbar.removeClass("sticky");
    }
}
//fixed navbar with chnage bg & color on scroll animation
$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('#navbar').addClass('bg-white');
        $('#navbar').removeClass('bg-transparent');
        $('.nav-link').addClass('nav-linkB');
        $('.nav-link').removeClass('nav-linkC');


    } else {
        $('#navbar').removeClass('bg-white ');
        $('#navbar').addClass('bg-transparent ');
        $('.nav-link').removeClass('nav-linkB');
        $('.nav-link').addClass('nav-linkC');


    }
})