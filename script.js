function openLink(url) {
    window.location.href = url;
}

window.onload = function(){
    document.querySelector('.cont_modal').className = "cont_modal";    
    }
    var c = 0;
    function open_close(){
      if(c % 2 == 0){    
    document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";  
    c++;
      }else {
    document.querySelector('.cont_modal').className = "cont_modal";  
    c++;    
      }  
    } 
 


    $(document).ready(function() {
      $(".button").on('click', function() {
          $(this).addClass("clicked");
  
          setTimeout(function() {
              $(".button").addClass("complete");
          }, 3000);
          
          setTimeout(function() {
              $(".button").removeClass("clicked");
          }, 5000);
          
          setTimeout(function() {
              $(".button").removeClass("complete");
          }, 5000);
      });
  });
  