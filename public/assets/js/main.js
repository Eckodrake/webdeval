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

// Modal popup
(function () {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles', '/assets/json/particles-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
})(); // End Modal popup