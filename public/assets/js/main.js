// Modal popup
(function ($) {
    for (let i = 1; i <= 3; i++) {
        $('.dev0' + i).animatedModal({
            color: 'rgba(0, 0, 0, .9)',
            overflow: 'hidden',
            animatedIn: 'slideInDown',
            animatedOut: 'slideOutUp',
            animationDuration: '1s'
        });
        $('.design0' + i).animatedModal({
            color: 'rgba(0, 0, 0, .9)',
            overflow: 'hidden',
            animatedIn: 'slideInDown',
            animatedOut: 'slideOutUp',
            animationDuration: '1s'
        });
    }
})(jQuery); // End Modal popup

// Mobil nav
(function ($) {
    let button = $('#sidebar-button');
    let wrapper = $('#sidebar-wrapper');

    button.click(function () {
        if (wrapper.hasClass('is-hide')) {
            wrapper.slideDown('slow').removeClass('is-hide').addClass('is-show');
        }
        else if (wrapper.hasClass('is-show')) {
            wrapper.slideUp('slow').removeClass('is-show').addClass('is-hide');
        }
    });

})(jQuery); // End Mobil nav

// Mobil nav
(function ($) {
    let flash = $('#flash');

    flash.click(function () {
        $(this).slideUp('slow');
    });

})(jQuery); // End Mobil nav

// Particles
(function () {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles', '/assets/json/particles-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
})(); // End Particles