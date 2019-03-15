document.ready(function () {
    "#to-top".hide();
    (function () {
        window.scroll(function () {
            if (this.scrollTop() > 300) {
                '#to-top'.fadeIn();
            }
            else {
                '#to-top'.fadeOut();
            }
        });
    });
});
