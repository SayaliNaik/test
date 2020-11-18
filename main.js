

document.querySelectorAll('.scene').forEach(elem => {

  const modifier = elem.getAttribute('data-modifier');

  basicScroll.create({
    elem: elem,
    from: 0,
    to: 700,
    direct: true,
    props: {
      '--translateY': {
        from: '0',
        to: `${10 * modifier}px` } } }).


  start();
});


var content = 'Hi, I am Sayali Naik. A Software Developer & seeker of knowledge';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>' + '<span class="blinking-cursor">|</span>';


$(ele).hide().appendTo('.type').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});


$(window).on('scroll',function(){
        if($(window).scrollTop()){
          $('nav').addClass('black');
        }else {
          $('nav').removeClass('black');
        }
      })


var $element=$('.each-event, .title');
var $window = $(window);
$window.on('scroll resize', check_for_fade);
$window.trigger('scroll');
function check_for_fade() { 
    var window_height = $window.height();
    
    $.each($element, function (event) {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_offset = $element.offset().top;
        space = window_height - (element_height + element_offset -$(window).scrollTop());
        if (space < 60) {
            $element.addClass("non-focus");
        } else {
            $element.removeClass("non-focus");
        }
 
    });
};

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

