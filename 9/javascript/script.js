jQuery(document).ready(function () {

    setInterval(function () {
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginTop: -400 });
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginTop: -800 });
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginTop: 0 });
        $(".slidelist").delay(2000);
    })

    $(function () {
        $(".tabmenu>ul>li>a").click(function () {
            $(this).parent().addClass("active")
                .siblings().removeClass("active")
            return false;
        });
    })

    $(".notice li:first").click(function () {
        $("#modal").addClass("active");
    })
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    })

    $(".navi>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    }).mouseout(function () {
        $(this).find(".submenu").stop().slideUp();
    })
});