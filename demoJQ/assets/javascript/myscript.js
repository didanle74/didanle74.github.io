var isOpen = false;
var viewSize = 1920;
const extension = ".jpg";
const modalText = [
    "The mist over the moutains",
    "Coffee beans",
    "Bear closeup",
    "Quiet ocean",
    "The mist",
    "My beloved typewriter",
    "Empty ghost train",
    "Sailing"
]
$(document).ready(function(){
    $('.banner .banner-content .jumbotron-text').hide(1);
    $('.banner .banner-content .jumbotron-text').fadeIn(1500);
    $(window).scroll(function(){
        if($(document).scrollTop() > 130)
        {
            $('.header .wrapper').addClass('bg-white');
            $('.header .navbar').removeClass('bg-transparent').addClass('bg-white border-bottom');
            $('.header .navbar .nav-link, .header .navbar .navbar-brand').removeClass('text-dark-777777').addClass('text-black');
        }
        else
        {
            $('.header .wrapper').removeClass('bg-white');
            $('.header .navbar').removeClass('bg-white border-bottom').addClass('bg-transparent');
            $('.header .navbar .nav-link, .header .navbar .navbar-brand').removeClass('text-black').addClass('text-dark-777777');
        }
    })
    $('.navbar-toggler').click(function(){
        if(!isOpen)
        {
            isOpen = true;
            $('.wrapper').show('slow');
        }
        else
        {
            isOpen = false;
            $('.wrapper').hide('slow');
        }
    })

    $('.nav-link').click(function(){
        isOpen = false;
        $('.wrapper').hide('slow');
    })
    // xử lý jumbotron text
    setInterval(function()
    {
        if($('.banner').outerWidth() < 600)
        {
            $('.jumbotron-text').text('MY LOGO');
        }
        else
        {
            $('.jumbotron-text').text('MY WEBSITE LOGO');
        }
        var left = "" + 0.5*$('.banner').outerWidth() - $('.jumbotron-text').outerWidth()*0.5 + "px";
        $('.jumbotron-text').css('left', left);
    }, 10);
    $('.layer-top').hide();
})

$('.portfolio .cacanh img').click(function(){
    var imgSrc = $(this).attr('src');
    var indexText = eval(imgSrc[imgSrc.indexOf(extension)-1]) - 1;
    $('.layer-top img').attr('src', imgSrc);
    $('.layer-top p').text(modalText[indexText]);
    $('.layer-top').fadeIn('slow');
})

$('.layer-top').click(function(){
    $(this).fadeOut();
})