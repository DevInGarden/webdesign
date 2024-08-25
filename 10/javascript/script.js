jQuery(document).ready(function () {

    setInterval(function () {
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginLeft: '-100%' })
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginLeft: '-200%' })
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginLeft:  })
        $(".slidelist").delay(2000);
    })

    $(".navi>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    }).mouseout(function () {
        $(this).find(".submenu").stop().slideUp();
    });

    $(".notice li:first").click(function () {
        $("#modal").addClass("active")
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active")
    });
});
