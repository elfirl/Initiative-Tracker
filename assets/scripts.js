$(document).ready(function() {
    
	$(".input-submit-button").on("click", function() {
			var fields = {};
			$("form [name]").each(function() {
				fields[this.name] = this.value;
			});
			console.log(fields);
	});

	


});
