$(function () {

  $(".header_toggle").on("click", function(){
    $('.header_nav').slideToggle();  
    $(".header_burger").toggleClass("active");
    $(".header_nav").toggleClass("active");
  });
   
  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;
  
        $("html, body").animate({
        scrollTop: elementOffset
        
        }, 1500);
  });

  $("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
  });

});