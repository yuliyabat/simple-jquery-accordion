$(document).ready(function(){
	
	$(".toggle-container").hide();

	$(".accordion").click(function(){

		var active = $(this);

		$(".accordion.active").each(function(){
			if(active[0] != $(this)[0]){
				$(this).toggleClass("active").next().slideToggle("slow");
			}
		  
	    });
	    
		active.toggleClass("active").next().slideToggle("slow");
	});

});