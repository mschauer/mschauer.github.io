$(document).ready(function () {
    $("#top1").parent().addClass('active');
    var main = main = $('#navbar ul');

    $('.scroll').click(function (event) {

        event.preventDefault();

        var full_url = this.href,
            parts = full_url.split('#'),
            trgt = parts[1],
            target_offset = $('#' + trgt).offset(),
            target_top = target_offset.top;

        $('html, body').animate({ scrollTop: target_top }, 500);

        /* Remove active class on any li when an anchor is clicked */

        main.children().removeClass();

        /* Add active class to clicked anchor's parent li */

        $(this).parent().addClass('active');

    });

    $(window).scroll(function (event) {
        if ($("#top").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
            $("#top1").parent().addClass('active');
            $("#pub1").parent().removeClass('active');
            $("#cal1").parent().removeClass('active');
            $("#code1").parent().removeClass('active');
        }
        if ($("#pub").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
            $("#top1").parent().removeClass('active');
            $("#pub1").parent().addClass('active');
            $("#cal1").parent().removeClass('active');
            $("#code1").parent().removeClass('active');
        }
        if ($("#cal").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
            $("#top1").parent().removeClass('active');
            $("#pub1").parent().removeClass('active');
            $("#cal1").parent().addClass('active');
            $("#code1").parent().removeClass('active');
        }
        if ($("#code").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
            $("#top1").parent().removeClass('active');
            $("#pub1").parent().removeClass('active');
            $("#cal1").parent().removeClass('active');
            $("#code1").parent().addClass('active');
        }
    });
});