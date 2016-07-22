$(function() {
  $("#box1 .box1-1 h3").click(function() {
    if($(this).next().is(':visible')){
      $(this).find("img").attr("src", "images/btn_open.png");
      $(this).next().slideToggle(300);
    }else{
      $(this).find("img").attr("src", "images/btn_close.png");$(this).next().slideToggle(300);
  }});
});