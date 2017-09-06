$(document).ready(function(){
//esconde la barra de navegacion
$(".navbar").hide();

//aparicion de la barra de navegacion
$function(){
  $(window).scroll(function(){
    //colocar la distancia para que aparezca el menu
    if($this).scrollTop()>100{
      $(".navbar").fadeIn();
    }else{
      $(".navbar").fadeOut();
    }
  };
});

});
