(function($){
    //1. Mobile Menu
    $(".mobile-menu-toggle").on("click", function () {
        $(".mobile-menu").addClass("active");
        $("body").addClass("overflow-hidden");
    });
    
    $(".mobile-menu .close").on("click", function () {
        $(".mobile-menu").removeClass("active");
        $("body").removeClass("overflow-hidden");
    });

    $(".mobile-menu ul li.has-submenu i").each(function () {
        $(this).on("click", function () {
        $(this).siblings('ul').slideToggle();
        $(this).toggleClass("icon-rotate");
        });
    });

    $(document).on("mouseup", function (e) {
        var offCanvusMenu = $(".mobile-menu");

        if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
            $(".mobile-menu").removeClass("active");
            $("body").removeClass("overflow-hidden");
        }
    });

    //5 header functions
    $(".drawer-close").on("click", function(){
        $(".cart-drawer").removeClass("active");
    }); 

    $(".offcanvus-toggle").on("click", function () {
        $(".offcanvus-box").addClass("active");
        $("body").addClass("overflow-hidden")
    });

    $(".offcanvus-close").on("click", function(){
        $(".offcanvus-box").removeClass("active");
        $("body").removeClass("overflow-hidden");
    });

    $(document).on("mouseup", function (e) {
        var offCanvusMenu = $(".offcanvus-box");
  
        if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
          $(".offcanvus-box").removeClass("active");
        }
    });

    //2. header sticky
    $(window).on("scroll", function(){
        var scrollBarPosition = $(this).scrollTop();
        if ( scrollBarPosition > 250 ) {    
            $(".sticky-header").addClass("sticky-on");
        } else {
            $(".sticky-header").removeClass("sticky-on");
        }
    });

})(jQuery)