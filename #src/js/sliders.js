jQuery(function () {

    jQuery('.slider__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        mobileFirst: true,
        prevArrow: '<div class="arrow arrow__left">&#60&#60</div>',
        nextArrow: '<div class="arrow arrow__right">&#62&#62</div>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    mobileFirst: true,
                    customPaging: function (slider, i) {
                        let imageSrc = $(slider.$slides[i]).find('img').attr('src');
                        return `<img src="${imageSrc}" alt="slide here" data-index="${i}">`;
                    },
                }
            }
        ]
    });
})