$(document).ready(function () {
    window.onscroll = function () {
        if (window.pageYOffset > 140) {
            console.log('if')
            $('#header').addClass("active");
        } else {
            $('#header').removeClass('active');
            console.log('else')
        }
    }
});

$('.nav-scroller').on('click', e => {
    const { href } = e.target

    if (href.includes('#')) {
        let id = href.split('#')[1]
        let $id = $(`#${id}`)

        e.preventDefault();

        var pos = $id.offset().top - 115;

        $('body, html').animate({ scrollTop: pos });
    }
})