jQuery(document).ready(function () {

    $(".navi>li").mouseover(function () {
        $(".submenu").stop().slideDown();
    }).mouseout(function () {
        $(".submenu").stop().slideUp();
    })

    setInterval(function () {
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginLeft: -1200 });
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginLeft: -2400 });
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginLeft: 0 });
        $(".slidelist").delay(2000);
    });

    $(function () {
        $(".tabmenu>li>a").click(function () {
            $(this).parent().addClass("active")
                .siblings()
                .removeClass("active");
            return false;
        });
    });

});