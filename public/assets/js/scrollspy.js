(function ($) {
    let sections = [];
    let id = false;
    let item = $('.sidebar-item');
    let link = $('a', item);

    link.click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        })
    });

    link.each(function () {
        sections.push($($(this).attr('href')));
    });

    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop() + ($(window).height() / 2);
        for(let i in sections) {
            let section = sections[i];
            if (scrollTop > section.offset().top) {
                idScroll = section.attr('id');
            }
        }
        if (idScroll !== id ) {
            id = idScroll;
            link.removeClass('is-active');
            $('a[href="#' + id + '"]', item).addClass('is-active');
        }
    })
})(jQuery);