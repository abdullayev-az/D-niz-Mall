


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