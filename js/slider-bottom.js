$(".slider-bottom-list").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
  prevArrow: ".slider-btn-prev",
  nextArrow: ".slider-btn-next",
  autoplay: true,
  autoplaySpeed: 2500,
});
