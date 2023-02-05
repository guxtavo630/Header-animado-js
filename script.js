$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(`.navbar`).addClass("sticky");
        } else {
            $(`.navbar`).removeClass("sticky");
        }
    });

    var typingEffect = new Typed(".multitext", {
        strings: ["Burguer", "Burguer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1500
    });

    $(`.menu-btn`).click(function () {
        $(`.navbar .menu`).toggleClass("active");
        $(`.menu-btn i`).toggleClass("active");
    });
});