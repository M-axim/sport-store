jQuery(function () {
    jQuery('.spoiler__burger').click(function (event) {
        jQuery(this).toggleClass('active');
        jQuery('.spoiler__content').slideToggle(200);
        if (window.matchMedia("(min-width: 993px)").matches) {
            jQuery('.dropdown-spoiler').toggleClass('visible');
        }
    })

    if (window.matchMedia("(max-width: 992px)").matches) {

        jQuery('.spoiler__label-dropdown').click(function (event) {
            let _this = this;
            jQuery(_this).toggleClass('active');
            const dropdown = $(_this).find($('.dropdown-spoiler'));
            dropdown.slideToggle(300);
        })

        jQuery('.spoiler__label-dropdown .spoiler__link').click(function (e) {
            e.preventDefault();
        })

        jQuery('.form-content__label').click(function (e) {
            $(this).toggleClass('active');
        })
    }

})