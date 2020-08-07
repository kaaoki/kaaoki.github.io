$(function(){
    
    $('#title').click(function(){
      $('#heart').css('color','red');      
      $('#heart').slideDown(300);
      $('#heart').slideUp(1000);      
    });
 
    $('.signup').click(function(){
      $('#heart').css('color','#239b76');
      $('#heart').slideDown(300);
      $('#heart').slideUp(1000);      
    });
    
    $('.facebook').click(function(){
      $('#heart').css('color','#3b5998');
      $('#heart').slideDown(300);
      $('#heart').slideUp(1000);      
    });
    
    $('.twitter').click(function(){
      $('#heart').css('color','#55acee');
      $('#heart').slideDown(300);
      $('#heart').slideUp(1000);      
    });    

});
