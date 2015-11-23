var allRolls = [];
var uniqueId = 0;


$(document).ready(function() {

	$("input[name=combatantName1]").focus();
	
	// Executs funcitons when an element with the specified class is clicked.
	$(".input-submit-button").on("click", function(event) {
		event.preventDefault();

		// The order here is important - create the array, sort by roll, display the sorted list on screen.
		var rolls = getCombatants();
		allRolls = $.merge(rolls, allRolls);
		allRolls.sort(sortArraysByRoll);
		displayRolls(allRolls);
		clearInput();
	});

	// Clears the list as well as the allRolls variable
	$(".clear-submit-button").on("click", function(event) {
		event.preventDefault();

		clearInitiativeList();
		$("input[name=combatantName1]").focus();
	});

	// Code to delete an entry
	$(document).on("click", 'i', function() {
		// Get the ID from i
		var deleteThis = ($(this).attr("data-combatant-id"));	
		// Remove that indexed item from the array
		allRolls.splice(deleteThis,1);
		// Rebuild and display the array
		allRolls.sort(sortArraysByRoll);
		displayRolls(allRolls);
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
	function displayRolls(allRolls) {
		$("li").remove();
		$.each(allRolls, function(key, value){
			var name = value[0];
			var roll = value[1];

			$("#list").append("<li>" + "<i class='glyphicon glyphicon-remove remove-x-icon' data-combatant-id='" + key + "'></i>" + "<span class='list-name'>" + name + "</span>" + "<span class='list-roll'>" + roll + "</span>" + "</li>");
		});

	}

	// Sorts the output in decending order. a - b for ascending.
	function sortArraysByRoll(a, b) {
		return b[1] - a[1];
	}

	function clearInput() {
        	$(".combatant").find("input:text").val('');
        	$("input[name=combatantName1]").focus();
	}

	function clearInitiativeList() {
		$("li").remove();
		allRolls = [];
		return allRolls;
	}



});
