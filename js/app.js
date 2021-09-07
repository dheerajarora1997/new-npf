$(document).ready(function() {
    $('#nav-fix ul li a').click(function() {
        const linkSelect = $(this).data('href');
        const sectionPlacement = $(linkSelect).offset();
        const navHeight = $('#nav-fix').data('height');
        $('#nav-fix ul li a').removeClass('active');
        $(this).addClass('active');
        $(window).scrollTop(sectionPlacement.top - navHeight);
    });
});

$(window).scroll(function() {
    const scrollDistance = $(window).scrollTop();
    const navHeight = $('#nav-fix').data('height');
    const scrollDistanceCalc = scrollDistance + navHeight;

    $('.nav-fix-section').each(function(i) {
        if ($(this).position().top <= scrollDistanceCalc) {
            $('#nav-fix ul li a').removeClass('active');
            $('#nav-fix ul li a').eq(i).addClass('active');
        }
    });
}).scroll();

$(window).scroll(function() {
    const scroll = $(window).scrollTop();
    if (scroll > 400 && scroll < 500) {
        $("#zabardast-product").css('opacity', .7);
    }
    else if (scroll > 550) {
        $("#zabardast-product").css('opacity', .5);
    }
    else{
        $("#zabardast-product").css('opacity', 1);
    }
}).scroll();