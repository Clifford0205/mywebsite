
 // $(window).on('load', function() {
 //    $('#slider').nivoSlider(); 
 //    }); 


      

var map;

function initMap() {

  map = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: { lat: 25.0474122, lng: 121.5044323 }
  });
  console.log(map);
  var marker = new google.maps.Marker({
    position: { lat: 25.0473697, lng: 121.506618},
    map: map,
    title:'萬華運動中心'
  });
  
}


$(document).ready(function() {
   $('.showmenu').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });
});


// animated

$(window).scroll(function(event) {
  var scrollPos=$(window).scrollTop();
  var windowHeight = $(window).height();
  console.log(scrollPos, windowHeight);


  $('.animated').each(function(){
  var thisPos=$(this).offset().top;
  if((windowHeight + scrollPos) >= thisPos) {
         $(this).addClass('fadeIn');
      }

});
});

