<<<<<<< HEAD
jQuery(document).ready(function () {
    $(".navi>li").mouseover(function () {
        $(".submenu").stop().slideDown();
        $(".menu_bg").stop().slideDown();
    }).mouseout(function () {
        $(".submenu").stop().slideUp();
        $(".menu_bg").stop().slideUp();
    })

    $(".imgslide a:gt(0)").hide();
    setInterval(function () {
        $(".imgslide a:first-child")
            .fadeOut()
            .next("a")
            .fadeIn()
            .end()
            .appendTo(".imgslide")
    }, 3000)


    $(".notice li:first").click(function () {
        $("#modal").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    })
=======
jQuery(document).ready(function () {
    $(".navi>li").mouseover(function () {
        $(".submenu").stop().slideDown();
        $(".menu_bg").stop().slideDown();
    }).mouseout(function () {
        $(".submenu").stop().slideUp();
        $(".menu_bg").stop().slideUp();
    })

    $(".imgslide a:gt(0)").hide();
    setInterval(function () {
        $(".imgslide a:first-child")
            .fadeOut()
            .next("a")
            .fadeIn()
            .end()
            .appendTo(".imgslide")
    }, 3000)


    $(".notice li:first").click(function () {
        $("#modal").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    })
>>>>>>> dc52a1747337d2f720141bd39ffeba7b5f7711a9
});