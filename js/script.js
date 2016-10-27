var numbers = [1, 5, 10, 50, 100, 500, 1000];
var numerals = ["I", "V", "X", "L", "C", "D", "M"];

// for (var i = 0; i < numbers.length; i++) {
// 	numbers[i]
// 	return
// }


var romanNumeral = function(input){
	return false;

}



$(document).ready(function() {

		$("form").submit(function(event) {
			var number = Math.round($("input#number").val());
			alert (number);
			var result = romanNumeral(number);
			$("#output").text(result);
			event.preventDefault();

		});//end of submit function
});//Document ready end
