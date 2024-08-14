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
    }, 3000);

    $(".notice li:first").click(function () {
        $("#modal").addClass("active");
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    });

});