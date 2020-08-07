$(function(){
    /*
    $('.signup').click(function(){
      $('#heart').slideDown(300);
    });
    
    $('.facebook').click(function(){
      $('#heart').slideUp(300);
    });
    
    $('.twitter').click(function(){
      $('#heart').slideDown(300);
    });    
    */
    
    
  $('.signup').clickToggle(function () {
    // １回目のクリック
    $('#heart').css('color','green');
    $('#heart').slideDown(300);
  }, function () {
    // ２回目のクリック
    $('#heart').slideUp(300);
  });
  
  $.fn.clickToggle = function (a, b) {
    return this.each(function () {
      var clicked = false;
      $(this).on('click', function () {
        clicked = !clicked;
        if (clicked) {
          return a.apply(this, arguments);
        }
        return b.apply(this, arguments);
      });
    });
  };
  

});

