const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav-links');
    
    // const navA = document.querySelector('.nav-links-a');
    // const navB = document.querySelector('.nav-links-b');
    // const navC = document.querySelector('.nav-links-c');
    // const navD = document.querySelector('.nav-links-d');
    // const navE = document.querySelector('.nav-links-e');


    const navLinks = document.querySelectorAll('.nav-links li')
    burger.addEventListener('click', () => {
        document.querySelector('nav a').classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
    // navA.addEventListener('click', () => {
    //     nav.classList.toggle('nav-active');
    //     navLinks.forEach((link, index) => {
    //         if(link.style.animation){
    //             link.style.animation = ''
    //         } else {
    //             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
    //         }
    //     });
    //     burger.classList.toggle('toggle');
    // });
    // navB.addEventListener('click', () => {
    //     nav.classList.toggle('nav-active');
    //     navLinks.forEach((link, index) => {
    //         if(link.style.animation){
    //             link.style.animation = ''
    //         } else {
    //             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
    //         }
    //     });
    //     burger.classList.toggle('toggle');
    // });
    // navC.addEventListener('click', () => {
    //     nav.classList.toggle('nav-active');
    //     navLinks.forEach((link, index) => {
    //         if(link.style.animation){
    //             link.style.animation = ''
    //         } else {
    //             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
    //         }
    //     });
    //     burger.classList.toggle('toggle');
    // });
    // navD.addEventListener('click', () => {
    //     nav.classList.toggle('nav-active');
    //     navLinks.forEach((link, index) => {
    //         if(link.style.animation){
    //             link.style.animation = ''
    //         } else {
    //             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
    //         }
    //     });
    //     burger.classList.toggle('toggle');
    // });
    // navE.addEventListener('click', () => {
    //     nav.classList.toggle('nav-active');
    //     navLinks.forEach((link, index) => {
    //         if(link.style.animation){
    //             link.style.animation = ''
    //         } else {
    //             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
    //         }
    //     });
    //     burger.classList.toggle('toggle');
    // });

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