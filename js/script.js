
var numbers = [1, 5, 10, 50, 100, 500, 1000];
var numerals = ["I", "V", "X", "L", "C", "D", "M"];
var otherNums = [2, 3, 4, 6, 7, 8, 9];
var otherNumers = ["II", "III", "IV", "VI", "VII", "VIII", "IX"];
// for (var i = 0; i < numbers.length; i++) {
// 	if (numbers[i] === input) {
// 		var newNumber = numerals[i]
// 		alert(newNumber);
// 	}	else {
// 	}
// }


var romanNumeral = function(input){
	if (numbers.indexOf(input) > -1) {
		for (var i = 0; i < numbers.length; i++) {
			if (numbers[i] === input) {
				var symbol = numerals[i]
				return symbol;
			}
		}//end of for 1 loop
	} else if (otherNums.indexOf(input) > -1) {
		for (var i = 0; i < otherNums.length; i++) {
			if (otherNums[i] === input) {
				var symbol = otherNumers[i]
				return symbol;
			}
		}//end of for 2 loop
	} else {
		return ("enter a valid number");
	}


} //end of function




$(document).ready(function() {

		$("form").submit(function(event) {
			var number = Math.round($("input#number").val());
			var result = romanNumeral(number);
			$("#output").text(result);
			event.preventDefault();

		});//end of submit function
});//Document ready end
