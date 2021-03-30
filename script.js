$(".btn-menu").click(function(){
  $(".menu").show();
});
$(".btn-close").click(function(){
  $(".menu").hide();
});
let nav = document.getElementById('navbar');

window.onscroll = function() {
  if (window.pageYOffset > 100) {
    nav.style.backgroundColor = 'rgba(255,255,255,0.6)';
   
  } else {
    nav.style.backgroundColor = 'transparent';
    nav.style.boxShadow = 'none';
  }
}