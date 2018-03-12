$(document).ready(function(){
     $('.carousel').carousel();
     $('.carousel.carousel-slider').carousel({fullWidth: true});
     
     $(".indicadorR").click(function(){
         $('.carousel').carousel('next');
     });
     
     $(".indicadorL").click(function(){
         $('.carousel').carousel('prev');
     });
});
