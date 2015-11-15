$(document).ready(function() {
    
	$(".input-submit-button").on("click", function() {
			event.preventDefault();
			var fields = {};
			$(".form-control").each(function() {
				fields[this.name] = this.value;
			});
			console.log(fields);
	});

	


});
