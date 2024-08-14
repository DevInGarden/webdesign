<<<<<<< HEAD
jQuery(document).ready(function () {

    $(".navi>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    }).mouseout(function () {
        $(this).find(".submenu").stop().slideUp();
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

=======
jQuery(document).ready(function () {

    $(".navi>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    }).mouseout(function () {
        $(this).find(".submenu").stop().slideUp();
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

>>>>>>> dc52a1747337d2f720141bd39ffeba7b5f7711a9
});