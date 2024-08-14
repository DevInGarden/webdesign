jQuery(document).ready(function () {

    setInterval(function () {
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginTop: -400 })
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginTop: -800 })
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginTop: 0 })
        $(".slidelist").delay(2000);
    })

    $(".notice li:first").click(function () {
        $("#modal").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    });

    $(".navi>li").mouseover(function () {
        $(".submenu").stop().slideDown();
        $(".menu_bg").stop().slideDown();
    }).mouseout(function () {
        $(".submenu").stop().slideUp();
        $(".menu_bg").stop().slideUp();
    });
});