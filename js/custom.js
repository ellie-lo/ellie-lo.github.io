$(document).ready(function() {
    // header color change
    $(window).on("scroll", function() {
        var scrollDistance = $(window).scrollTop();
        var $header = $(".js-header");
        if (scrollDistance > 80) {
            $header.addClass("header--colored");
        } else {
            $header.removeClass("header--colored");
        }
    })

    if (screen.width > 768) {
        // wow plugin initialize
        new WOW().init();
    }

    // fancybox plugin initialize
    $('[data-fancybox]').fancybox({
        loop: true
    });

    if (screen.width > 768) {
        // stellar plugin initialize
        $(window).stellar();
    }

})