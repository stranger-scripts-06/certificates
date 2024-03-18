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
      $(".buttons").on('click', function(event) {
          // Prevent the default behavior of the link (i.e., opening the URL in the same window)
          event.preventDefault();
  
          var clickedButton = $(this); // Store the clicked button in a variable
  
          // Add classes to the clicked button
          clickedButton.addClass("clicked");
  
          setTimeout(function() {
              clickedButton.addClass("complete");
          }, 3000);
          
          setTimeout(function() {
              clickedButton.removeClass("clicked");
          }, 5000);
          
          setTimeout(function() {
              clickedButton.removeClass("complete");
          }, 5000);
  
          // Event listener for animation end
          clickedButton.on('animationend', function() {
              // Get the href attribute of the clicked button's <a> tag
              var link = clickedButton.attr('href');
              // Open the link in a new window/tab
              window.open(link, '_blank');
          });
      });
  });

  
  $(document).ready(function() {
    $(".buttons").on('click', function(event) {
        event.preventDefault();

        var clickedButton = $(this);
        clickedButton.addClass("clicked");

        // Add animation classes and open the link after animation completion
        setTimeout(function() {
            clickedButton.addClass("animate-out");

            setTimeout(function() {
                var link = clickedButton.data('link'); // Retrieve link from data attribute
                window.open(link, "_blank");
            }, 3500); // Adjust the timeout duration based on your animation timing

        }, 100);
    });
});


  
  
  