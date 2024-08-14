<<<<<<< HEAD
jQuery(document).ready(function () {

    $(".navi>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    }).mouseout(function () {
        $(this).find(".submenu").stop().slideUp();
    });

    $(".imgslide a:gt(0)").hide();
    setInterval(function () {
        $(".imgslide a:first-child")
            .fadeOut()
            .next("a")
            .fadeIn()
            .end(0)
            .appendTo(".imgslide")
    }, 3000)

    $(function () {
        $(".tabmenu>li>a").click(function () {
            $(this).parent()
                .addClass("active")
                .siblings()
                .removeClass("active");
            return false;
        });
    });

    $(".notice li:first").click(function () {
        $("#modal").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    });

=======
jQuery(document).ready(function () {

    $(".navi>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    }).mouseout(function () {
        $(this).find(".submenu").stop().slideUp();
    });

    $(".imgslide a:gt(0)").hide();
    setInterval(function () {
        $(".imgslide a:first-child")
            .fadeOut()
            .next("a")
            .fadeIn()
            .end(0)
            .appendTo(".imgslide")
    }, 3000)

    $(function () {
        $(".tabmenu>li>a").click(function () {
            $(this).parent()
                .addClass("active")
                .siblings()
                .removeClass("active");
            return false;
        });
    });

    $(".notice li:first").click(function () {
        $("#modal").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    });

>>>>>>> dc52a1747337d2f720141bd39ffeba7b5f7711a9
});