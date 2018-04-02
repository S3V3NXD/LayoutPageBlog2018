$(document).ready(function () {
    $(".carousel").carousel();
    $(".carousel.carousel-slider").carousel({fullWidth: true});

    $(".indicadorR").click(function () {
        $('.carousel').carousel("next");
        clearTimeout(time);
        autoplay();
    });

    $(".indicadorL").click(function () {
        $('.carousel').carousel("prev");
        clearTimeout(time);
        autoplay();
    });
    autoplay();
});
var time;
function autoplay(){
    time = setTimeout(function(){ autoplay(); $(".carousel").carousel("next"); }, 10000);;
}