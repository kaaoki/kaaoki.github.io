$(function(){
    
  let $heart = $('#heart');
  
    $('#title').click(function(){
      $heart.css('color','red').slideDown(300).slideUp(1000);      
    });
 
    $('.signup').click(function(){
      $heart.css('color','#239b76').slideDown(300).slideUp(1000);
    });
    
    $('.facebook').click(function(){
      $heart.css('color','#3b5998').slideDown(300).slideUp(1000);
    });
    
    $('.twitter').click(function(){
      $heart.css('color','#55acee').slideDown(300).slideUp(1000);
    });    

});
