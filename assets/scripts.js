$(document).ready(function() {


	// Checks to see if the on click event is triggerd from the button with class input-submit-button.
	$(".input-submit-button").on("click", function(event) {
		// Prevents the default behavior from the button submitting.
		event.preventDefault();

		// Make a variable and assigns an empty object into it.
		var rolls = {};

		// Grabs anything with a class of combatant, and for each one, executes a function with parameters index and field
		$(".combatant").each(function(index, field) {
			// jQuery looks for any field with a class of name, gets its input value, then assigns that to the variable.
			var name = $(field).find(".name").val();
			// jQuery looks for any field with a class of roll, gets its input value, then assigns that to the variable.
			var roll = $(field).find(".roll").val();
			// Adds the object pair of {name: roll} based on the above variables. How does it append vs overwrite?
			rolls[name] = roll;
		});

		// Grabs each key pair from rolls, and adds the pairs to <li>, to a <ul> with id of list.
		$.each(rolls, function(key, value){
			$("#list").append("<li>" + key + " " + value + "</li>");
		});

		console.log(rolls);
	});

});
