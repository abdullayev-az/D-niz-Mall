
  $('#toogle-menu1').click(function(){
  $('#nav-overlay').fadeIn('slow');
  $('body').css({'overflow-y':'hidden'});
  $('.icon-bar').css({'width':'30px','height':'2px','border-radius':'none',})
  $('.top-bar').css({'transform-origin':'10% 10%','position':'relative','bottom':'8px', 'left':'18px' ,'transform':'rotate(46deg)',});
  $('.middle-bar').css({'display':'none'});
  $('.bottom-bar').css({'transform':'rotate(-43deg)','position':'relative','right':'16px','bottom':'1px',});

});
$('#toogle-menu2').click(function(){
  $('#nav-overlay').fadeOut('slow');
  $('body').css({'overflow-y':'scroll'})
  $('.icon-bar').css({'width':'7px','height':'7px','border-radius':'50%',})
  $('.top-bar').css({'transform-origin':'10% 10%','position':'relative','bottom':'0px', 'left':'0px' ,'transform':'rotate(0)',});
  $('.middle-bar').css({'display':'block'});
  $('.bottom-bar').css({'transform':'rotate(0deg)','position':'relative','right':'0px'});
});


 $(window).resize(function() {
  if ($(this).width() < 768) {
    $('.bg-child').css({'background':'0 0'});
    $('#buton-2').click(function(){
      $('.bg-child').css({'background':'0 0'});
    });
    $('#buton-1').click(function(){
      $('.bg-child').css({'background':'0 0'});
    })
  } else {  
    $('#buton-2').click(function(){
      $('.bg-child').css({'background-image':'url(img/for-adults-cover.png)','background-size':'55%','background-position-y':'65%','background-repeat':'no-repeat','background-position-x':'100%'})
    });
    $('#buton-1').click(function(){
      $('.bg-child').css({'background-image':'url(img/childs_image.png)','background-size':'contain','background-repeat':'no-repeat','background-position-x':'100%'})
    })
  }
});


$('#buton-2').click(function(){
  $('#buton-2').css({'background-color':'#38409e','color':'#fff'});
  $('#buton-1').css({'background-color':'#fff','color':'#38409e'});
  $('.bg-child').css({'background-image':'url(img/for-adults-cover.png)','background-size':'55%','background-position-y':'65%','background-repeat':'no-repeat','background-position-x':'100%'})

});

$('#buton-1').click(function(){
  $('#buton-2').css({'background-color':'#fff','color':'#38409e'});
  $('#buton-1').css({'background-color':'#38409e','color':'#fff'});
  $('.bg-child').css({'background-image':'url(img/childs_image.png)','background-size':'contain','background-repeat':'no-repeat','background-position-x':'100%'})
});