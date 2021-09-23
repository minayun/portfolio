$(document).ready(function(){
    
  /* bxslider*/
  $('.bxslider').bxSlider({
      pager:false,
      controls:true,
      auto:true,
      pause:4000, /*1000=1초*/
      
  });
  
  $('.box1_1').click(function(){
    $('.box1_1-up').fadeIn();
  });
  
  $('.close').click(function(){
    $('.box1_1-up').fadeOut();
  });

  $('.box2_1').click(function(){
    $('.box2_1-up').fadeIn();
  });
  
  $('.close').click(function(){
    $('.box2_1-up').fadeOut();
  });

  $('.box2_2').click(function(){
    $('.box2_2-up').fadeIn();
  });
  
  $('.close').click(function(){
    $('.box2_2-up').fadeOut();
  });

  $('.box1_2').click(function(){
    $('.box1_2-up').fadeIn();
  });
  
  $('.close').click(function(){
    $('.box1_2-up').fadeOut();
  });
  
  $('.box1_3').click(function(){
    $('.box1_3-up').fadeIn();
  });
  
  $('.close').click(function(){
    $('.box1_3-up').fadeOut();
  });


  // $('.content3').bxSlider({
  //  pager:true,
  //  controls:false,
  //  auto:true,
  //  pause:3000, /*1000=1초*/
  //  maxSlides:3,
  //  stopAutoOnClick:true,
  //  autoControlsSelector:true,
  //  minSlides:3,});

  //$('.sssss1').slick({
  // setting-name: multiple-items,
  //  infinite: true,
  //  slidesToShow: 3,
  //  slidesToScroll: 3
  // });

  $('.content3').slick({
    dots:true,
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    /*rows:3 한 줄*/
});

$('.content1').slick({
  dots:true,
  arrows:false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  rows:2

  /*rows:3 한 줄*/
});

    
}); /*제이쿼리 끝*/