$(document).ready(function() {
    new WOW().init();
    if ($(window).width() > 1199) {
        $('.topbar').scrollToFixed({
            marginTop: 80,
            zIndex: 50
        });
    }
    if ($(window).width() < 1200) {
        $('.topbar').scrollToFixed({
            marginTop: 60,
            zIndex: 50
        });
    }
    if ($('.homepage').length > 0) {
        $('#fullpage').fullpage({
            scrollOverflow: true,
            scrollingSpeed: 500,
            navigation: true,
            navigationPosition: 'right',
            anchors: ['firstPage', '2Page', '3Page', '4Page', '5Page', 'lastPage'],
            afterLoad: function(anchorLink, index) {
                var loadedSection = $(this);
                //using anchorLink
                if (anchorLink == 'firstPage') {
                    $('header').removeClass('minimal');
                } else {
                    $('header').addClass('minimal');
                }
            }
        });
    }

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('.up').fadeIn(300);
        } else {
            $('.up').fadeOut(300);
        }
    });

    $('.up').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 500);
    });

    $('.btn-showmenu').click(function() {
        $(this).toggleClass('active');
        $('.menu').toggleClass('open');
        $('.overlay').fadeToggle(500);
        $('.search').removeClass('open');
        $('html').css('overflow', 'hidden');
    });
    $('.btn-showsub').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(500);
    })

    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.btn-showmenu').removeClass('active');
        $('.menu').removeClass('open');
        $('html').css('overflow', 'auto');
    });

    $('.searchtoggle').click(function() {
        $('.search').toggleClass('open');
    });

    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());

    $(".counter").countimator({ duration: 1000, });

    // SLIDES
    $('.service-slide ').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1000,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.home-news .newslist').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        dots: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.home-news .partnerlist').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.home-news .certlist').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    // HISTORY


    $('.history-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        dots: false,
        fade: false,
        arrows: false,
        asNavFor: '.history-slide'
    });
    $('.history-year').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        fade: false,
        arrows: true,
        asNavFor: '.history-slide'
    });
    $('.history-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        fade: false,
        arrows: false,
        asNavFor: '.history-slide'
    });
    $('.history-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        asNavFor: '.history-slide'
    });

    $('.carimg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        speed: 500,
        dots: false,
        arrows: true,
    });

    // DISABLE SCROLL MAP
    $('#map').click(function() {
            $(this).find('iframe').addClass('active')
        })
        .mouseleave(function() {
            $(this).find('iframe').removeClass('active')
        });

});


// REVOLUTION SLIDER
var tpj = jQuery;

var banner001;
tpj(document).ready(function() {
    if (tpj("#banner001").revolution == undefined) {
        revslider_showDoubleJqueryError("#banner001");
    } else {
        banner001 = tpj("#banner001").show().revolution({
            sliderType: "standard",
            sliderLayout: 'fullscreen',
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    enable: true,
                    style: 'uranus',
                    tmp: '',
                    rtl: false,
                    hide_onleave: true,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 300,
                    hide_delay_mobile: 1200,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    },

                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: false,
                    style: 'hermes',
                    tmp: '',
                    direction: 'horizontal',
                    rtl: false,

                    container: 'slider',
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 60,
                    space: 5,

                    hide_onleave: false,
                    hide_onmobile: false,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200

                }
            },
            responsiveLevels: [1024, 991, 767, 543],
            visibilityLevels: [1024, 991, 767, 543],
            gridwidth: [1600, 1600, 1600, 1600],
            gridheight: [670, 670, 670, 670],
            lazyType: "none",
            // parallax: {
            //     type: "scroll",
            //     origo: "slidercenter",
            //     speed: 50,
            //     levels: [5000]
            // },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }
})