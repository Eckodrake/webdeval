// Modal popup
(function ($) {
    const item = $('.modal-js');

    item.each(function (index) {
        let id = index + 1;

        $('.modal' + id).animatedModal({
            color: 'rgba(0, 0, 0, .9)',
            overflow: 'auto',
            animatedIn: 'slideInDown',
            animatedOut: 'slideOutUp',
            animationDuration: '1s'
        });
    });

})(jQuery); // End Modal popup

// Mobil nav
(function ($) {
    let button = $('#sidebar-button');
    let wrapper = $('#sidebar-wrapper');

    button.click(function () {
        if (wrapper.hasClass('is-hide')) {
            wrapper.slideDown('slow').removeClass('is-hide').addClass('is-show');
        } else if (wrapper.hasClass('is-show')) {
            wrapper.slideUp('slow').removeClass('is-show').addClass('is-hide');
        }
    });

})(jQuery); // End Mobil nav

// Flash message
(function ($) {
    let flash = $('#flash');

    flash.click(function () {
        $(this).slideUp('slow');
    });

})(jQuery); // End Flash message

// Particles
(function () {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles', '/assets/json/particles-config.json', function () {
        console.log('callback - particles.js config loaded');
    });
})(); // End Particles

// ---------------
// Rellax parallax
// ---------------
(function () {
    new Rellax('.rellax');
})(); // End Rellax parallax