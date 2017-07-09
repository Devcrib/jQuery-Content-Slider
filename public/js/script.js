$(document).ready(() => {
  const speed = 500; // 1/2 a second => fade speed
  const autoSwitch = true; // autoslider aoption
  const autoSwitchSpeed = 4000;

  // Add initial active class
  $('.slide').first().addClass('active');
  // hide all slides
  $('.slide').hide();
  // show first slide
  $('.active').show();

  function slide(next=true) {
    $('.active').removeClass('active').addClass('old-active');
    if ( next ) {
      if ( $('.old-active').is(':last-child') ) $('.slide').first().addClass('active');
      else $('.old-active').next().addClass('active');
    } else {
      if ( $('.old-active').is(':first-child') ) $('.slide').last().addClass('active');
      else $('.old-active').prev().addClass('active');
    }
    $('.old-active').removeClass('old-active');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }

  function prevSlide() {
    $('.active').removeClass('active').addClass('old-active');
    if ( $('.old-active').is(':first-child') ) $('.slide').last().addClass('active');
    else $('.old-active').prev().addClass('active');
    $('.old-active').removeClass('old-active');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }

  // next slide
  $('#next').on('click', function() {
    slide(true);
  });

  // prev slide
  $('#prev').on('click', function() {
    slide(false);
  });

  if ( autoSwitch ) {
    setInterval(function() {
      slide();
    }, autoSwitchSpeed);
  }
})
