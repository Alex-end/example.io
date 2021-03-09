$('.slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  arrows:false,
  fade: true,
  cssEase: 'linear'
});

$('.slider_2').slick({
	dots: false,
  infinite: true,
  arrows:false,
   
  fade: true,
  cssEase: 'linear',
  asNavFor: '.slider_3',
});

$('.slider_3').slick({
	dots: true,
  infinite: true,
   autoplay: true,
  speed: 500,
  arrows:false,
  fade: true,
  cssEase: 'linear',
  asNavFor: '.slider_2',
});

const smoothLinks = document.querySelectorAll('a[href^="#i"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });}
