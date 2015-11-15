$(document).ready(function() {

	// $(".input-submit-button").on("click", function() {
	// 		event.preventDefault();
	// 		var fields = {};
	// 		$(".form-control").each(function() {
	// 			fields[this.name] = this.value;
	// 		});
	// 		console.log(fields);
	// });

  $(".input-submit-button").on("click", function(event) {
    event.preventDefault();

    var rolls = {};
    // OR var rolls = [];

    $('.combatant').each(function(index, field) {
      var name = $(field).find('.name').val();
      var roll = $(field).find('.roll').val();

      rolls[name] = roll;
      // OR rolls.push({name: name, roll: roll});
    });

    console.log(rolls);
  });

});
