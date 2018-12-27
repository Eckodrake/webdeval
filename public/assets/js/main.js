// Modal popup
(function ($) {
    for (let i = 1; i <= 3; i++) {
        $('.demo0' + i).animatedModal({
            color: 'rgba(0, 0, 0, .9)',
            overflow: 'hidden',
            animatedIn: 'slideInDown',
            animatedOut: 'slideOutUp',
            animationDuration: '1s'
        });
    }
})(jQuery); // End Modal popup