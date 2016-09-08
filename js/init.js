(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function goBack(num){
  switch(num){
    case 1:
      $(".enter-name").slideUp('fast', function(){
         $(".template-cards").animate({"left":0}, function(){$(this).slideDown('fast')});
      });
      $(".step-1").addClass('active-step');
      $(".step-2").removeClass('active-step');
      break;
    case 2:
      $(".enter-email").slideUp('fast', function(){
         $(".enter-name").animate({"left":0}, function(){$(this).slideDown('fast')});
      });
      $(".step-2").addClass('active-step');
      $(".step-3").removeClass('active-step');
      break;
    case 3:
      $(".select-category").slideUp('fast', function(){
         $(".enter-email").animate({"left":0}, function(){$(this).slideDown('fast')});
      });
      $(".step-3").addClass('active-step');
      $(".step-4").removeClass('active-step');
      break;
    case 4:
      $(".bulid-resume").slideUp('fast', function(){
         $(".select-category").animate({"left":0}, function(){$(this).slideDown('fast')});
      });
      $(".step-4").addClass('active-step');
      $(".step-5").removeClass('active-step');
      break;
  }
}

function gotoStep(num){
	switch (num) {
      case 1: 

      	break;
      case 2: 
          $(".template-cards").animate({"left":"-100%"}, function(){
            $(this).slideUp('slow', function(){
              $(".enter-name").slideDown('fast');
            });
          });
          
        	$(".step-1").addClass('step-done');
          $(".step-2").addClass('active-step');
        	break;
      case 3:
        if(($("#first_name").val().trim().length > 0) && ($("#last_name").val().trim().length > 0)){
        	$(".enter-name").animate({"left":"-100%"}, function(){
            $(this).slideUp('slow', function(){
              $(".enter-email").slideDown('fast');
            });
          });

        	$(".step-2").addClass('step-done');
          $(".step-3").addClass('active-step');
        }
      	break;
      case 4:
        if(($("#email2").val().trim().length > 0) && validateEmail($("#email2").val())){
        	$(".enter-email").animate({"left":"-100%"}, function(){
            $(this).slideUp('slow', function(){
              $(".select-category").slideDown('fast');
            });
          });

        	$(".step-3").addClass('step-done');
          $(".step-4").addClass('active-step');
       }
      	break;
      case 5:
        location.href = "profile.html"
        /*$(".select-category").animate({"left":"-100%"}, function(){
          $(this).slideUp('slow', function(){
            $(".bulid-resume").slideDown('fast', function(){
              fnRenderBuilderResumeComponents();
            });
          });
        });*/

        $(".step-4").addClass('step-done');
        $(".step-5").addClass('active-step');



      default: return
    }

}

$.validator.setDefaults({
    errorClass: 'invalid',
    validClass: "valid",
    errorPlacement: function (error, element) {
        $(element)
            .closest("form")
            .find("label[for='" + element.attr("id") + "']")
            .attr('data-error', error.text());
    },
    submitHandler: function (form) {
        console.log('form ok');
    }
});

$("#form").validate({
    rules: {
        dateField: {
            date: true
        }
    }
});


