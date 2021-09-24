
var glideland = new Glide('.glideland', {
    type: 'carousel',
    focusAt: 'center',
    perView: 3,
    startAt: 0,
    keyboard: true,
    dragThreshold: 120,
    swipeThreshold: 90,
    autoplay: 4000,
    animationDuration: 1000,
    peek: 100,
    breakpoints: {
        1008: {
          perView: 2
        },
        640: {
          perView: 1
        }},
 
  });
  
  var glidefood = new Glide('.glidefood', {
    type: 'carousel',
    focusAt: 'center',
    perView: 3,
    startAt: 0,
    keyboard: true,
    dragThreshold: 120,
    swipeThreshold: 90,
    autoplay: 4000,
    animationDuration: 1000,
    peek: 100,
    breakpoints: {
        1008: {
          perView: 3
        },
        640: {
          perView: 1
        }},
  });
  

  var glideevent = new Glide('.glideevent', {
    type: 'carousel',
    focusAt: 'center',
    perView: 2,
    startAt: 0,
    keyboard: true,
    dragThreshold: 120,
    swipeThreshold: 90,
    autoplay: 4000,
    animationDuration: 1000,
    peek: 100,
    breakpoints: {
        1008: {
          perView: 3
        },
        640: {
          perView: 1
        }},
  });

  glidefood.mount();
  glideland.mount();
  glideevent.mount();


