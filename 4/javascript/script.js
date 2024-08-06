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

    $(function () {
        $(".tabmenu>li>a").click(function () {
            $(this).parent().addClass("active")
                .siblings()
                .removeClass("active")
            return false;
        });
    });

    $(".notice li:first").click(function () {
        $("#modal").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    });

});