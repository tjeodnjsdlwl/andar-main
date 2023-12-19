const bannerSlide = new Swiper(".banner-slide", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'fade',
});


const mainSlide = new Swiper(".main-slide", {
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect:'fade',
    pagination: {
        el: ".main-pagination",
    },
});

const recommendSlide = new Swiper(".recommend-slide", {
    speed: 600,
    pagination: {
        el: ".recommend-pagination",
    },
});

const itemSlide = new Swiper(".item-slide", {
    freeMode: true,
    slidesPerView: 2.2,
    spaceBetween: 10,

});


$('.btn-hamburger').click(function(){
    $('.group-hamburger').addClass('on');
    $('body').addClass('hidden');
})

$('.group-hamburger .btn-close, .dimmed').click(function(){
    $('.group-hamburger').removeClass('on');
    $('body').removeClass('hidden');
})

$('.hamburger-item [class*="btn-"]').click(function(){
    $(this).toggleClass('on').siblings('.item-list').slideToggle();
})
$('.sub-item [class*="btn-"]').click(function(){
    $(this).toggleClass('on').siblings('.item-list').slideToggle();
})

$('.group-menu2 .btn-all').click(function(){
    $('.header .menu-top').toggleClass('on');
    $('.menu-all').slideToggle();
})

$('.btn-search').click(function(){
    $('.group-search').addClass('on');
})

$('.group-search .btn-prev').click(function(){
    $('.group-search').removeClass('on');
})

$('.tab-item button').click(function(){
    tabClass=$(this).data('tab')
    $(this).parents('.tab-item').addClass('on').siblings('.tab-item').removeClass('on');
    $(tabClass).addClass('on').siblings('#tab').removeClass('on');
})


let lastScroll=0;

$(window).scroll(function(){
    curr=$(this).scrollTop();
    if (curr>=30) {
        $('.header .group-menu').addClass('on');
        $('.header .group-menu2').addClass('on');
    } else {
        $('.header .group-menu').removeClass('on');
        $('.header .group-menu2').removeClass('on');
    }

    if (lastScroll > curr) {
        $('.control-bar').addClass('on');
    } else {
        $('.control-bar').removeClass('on');
    }
    lastScroll = curr;
})

$('.control-bar .btn-top').click(function(){
    window.scrollTo({top:0, behavior:'smooth'})
})

