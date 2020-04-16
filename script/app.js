const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    const navLinks = document.querySelectorAll('.nav-links li')
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

    document.querySelector('nav').addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

    burger.addEventListener('keydown', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
            }
        });
        burger.classList.toggle('toggle');
    });    
}
navSlide();

$(document).ready(function () {
    $("#first").addClass('scroll-item-active');
    var main = main = $('#scroll');
    $('.scroll-item').click(function (event) {
        event.preventDefault();
        var trgt = $(this).attr('id') + "1";
        target_offset = $('#' + trgt).offset(),
        target_top = target_offset.top;
        $('html, body').animate({
            scrollTop: target_top
        }, 500);
        main.children().removeClass('scroll-item-active');
        $(this).addClass('scroll-item-active');
});

$(window).scroll(function (event) {
    if ($("#first1").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
        $("#first").addClass('scroll-item-active');
        $("#second").removeClass('scroll-item-active');
        $("#third").removeClass('scroll-item-active');
        $("#fourth").removeClass('scroll-item-active');
        $("#fifth").removeClass('scroll-item-active');
    }
    if ($("#second1").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
        $("#second").addClass('scroll-item-active');
        $("#first").removeClass('scroll-item-active');
        $("#third").removeClass('scroll-item-active');
        $("#fourth").removeClass('scroll-item-active');
        $("#fifth").removeClass('scroll-item-active');
    }
    if ($("#third1").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
        $("#third").addClass('scroll-item-active');
        $("#first").removeClass('scroll-item-active');
        $("#second").removeClass('scroll-item-active');
        $("#fourth").removeClass('scroll-item-active');
        $("#fifth").removeClass('scroll-item-active');
    }
    if ($("#fourth1").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
        $("#fourth").addClass('scroll-item-active');
        $("#first").removeClass('scroll-item-active');
        $("#second").removeClass('scroll-item-active');
        $("#third").removeClass('scroll-item-active');
        $("#fifth").removeClass('scroll-item-active');
    }
    if ($("#fifth1").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
        $("#fifth").addClass('scroll-item-active');
        $("#first").removeClass('scroll-item-active');
        $("#second").removeClass('scroll-item-active');
        $("#third").removeClass('scroll-item-active');
        $("#fourth").removeClass('scroll-item-active');
    }
    });
});

AOS.init({
    disable: function() {
        let maxWidth = 840;
        return window.innerWidth < maxWidth;
    }
});

let $mouseX = 0, $mouseY = 0;
let $xp = 0, $yp =0;

$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;    
});

let $loop = setInterval(function(){
$xp += (($mouseX - $xp)/5);
$yp += (($mouseY - $yp)/5);
$("#follow-cursor").css({left:$xp +'px', top:$yp +'px'});  
}, 30);

let img = $('.point');
if(img.length > 0){
    let offset = img.offset();
    function mouse(evt){
        let center_x = (offset.left) + (img.width()/2);
        let center_y = (offset.top) + (img.height()/2);
        let mouse_x = evt.pageX; var mouse_y = evt.pageY;
        let radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        let degree = (radians * (180 / Math.PI) * -1) + 90; 
        img.css('-moz-transform', 'rotate('+degree+'deg)');
        img.css('-webkit-transform', 'rotate('+degree+'deg)');
        img.css('-o-transform', 'rotate('+degree+'deg)');
        img.css('-ms-transform', 'rotate('+degree+'deg)');
    }
    $(document).mousemove(mouse);
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);