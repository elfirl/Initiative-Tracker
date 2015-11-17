$(document).ready(function() {

	// Executs funcitons when an element with the specified class is clicked.
	$(".input-submit-button").on("click", function(event) {
		event.preventDefault();

		// The order here is important - create the array, sort by roll, display the sorted list on screen.
		var rolls = getCombatants();
		rolls.sort(sortArraysByRoll);
		displayRolls(rolls);
	});

	// Sets the value of name and roll to the input field specified, and puts them in an array of arrays.
	function getCombatants() {
		var rolls = [];

		$(".combatant").each(function(index, field) {
			var name = $(field).find(".name").val();
			var roll = $(field).find(".roll").val();

			// If both vars have a value, make a new array containing both inside of the rolls array.
			if(name && roll) {
				rolls.push([name, roll]);
			}
		});

		return rolls;
	}

	// Takes the rolls, and displays them in a list of <li>.
	function displayRolls(rolls) {
		$.each(rolls, function(key, value){
			var name = value[0];
			var roll = value[1];

			$("#list").append("<li>" + name + " " + roll + "</li>");
		});
	}

	// Sorts the output in decending order. a - b for ascending.
	function sortArraysByRoll(a, b) {
		return b[1] - a[1];
	}





});
