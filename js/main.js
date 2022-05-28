$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        startPosition: 1,
        dots: false,
        navText: ['<img src="img/icons/left.svg">','<img src="img/icons/right.svg">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


  $('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
      e.preventDefault();
      $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

 
    // data-scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementid = $(this).data('scroll');
        let elemenoffset = $(elementid).offset().top;

        console.log(elementid);

        $("html, body").animate({

            scrollTop: elemenoffset

        }, 1000);

    });

// navToggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


});