<<<<<<< HEAD
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

    $(".notice li:first").click(function () {
        $("#modal").addClass("active")
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active")
    });

=======
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

    $(".notice li:first").click(function () {
        $("#modal").addClass("active")
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active")
    });

>>>>>>> dc52a1747337d2f720141bd39ffeba7b5f7711a9
});