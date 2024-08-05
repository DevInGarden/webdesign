jQuery(document).ready(function () {

    $(".navi>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown()
    }).mouseout(function () {
        $(this).find(".submenu").stop().slideUp()
    })

    setInterval(function () {
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginTop: -300 });
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginTop: -600 });
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginTop: 0 });
        $(".slidelist").delay(2000);
    });

});