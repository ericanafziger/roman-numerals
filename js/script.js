
// var numbers = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
// 	var romanNumeral = function(input) {
// 		for (input in number) {
// 			alert(number);
// 		}
//
//
//
// 	} //end of function
var array = [];
var romanNumeral = function(number) {
	for (var i = 0; i < number; i++) {
		array.push("I");

}
var join = array.join("");
return join;

}








$(document).ready(function() {

		$("form").submit(function(event) {
			var number = Math.round($("input#number").val());
			var result = romanNumeral(number);
			$("#output").text(result);
			event.preventDefault();

		});//end of submit function
});//Document ready end










// var numbers = [1, 5, 10, 50, 100, 500, 1000];
// var numerals = ["I", "V", "X", "L", "C", "D", "M"];
// var otherNums = [2, 3, 4, 6, 7, 8, 9];
// var otherNumers = ["II", "III", "IV", "VI", "VII", "VIII", "IX"];
//
//
//
// if (numbers.indexOf(parts) > -1) {
// 	for (var i = 0; i < numbers.length; i++) {
// 		if (numbers[i] === parts) {
// 			var symbol = numerals[i]
// 			return symbol;
// 		}
// 	}//end of for 1 loop
// } else if (otherNums.indexOf(parts) > -1) {
// 	for (var i = 0; i < otherNums.length; i++) {
// 		if (otherNums[i] === parts) {
// 			var symbol = otherNumers[i]
// 			return symbol;
// 		}
// 	}//end of for 2 loop
// } else {
// 	return ("enter a valid number");
// }
//




//   var parts = [];
// function splitToParts (placeholder) {
// 	var wholePart = placeholder;
// 	var multiplier = 1;
//
// 	while(wholePart > 0) {
// 		var result = wholePart % 10;
//
// 		if(result > 0) {
// 				parts.unshift(result * multiplier);
// 		}
//
// 		wholePart = Math.floor(wholePart / 10);
// 		multiplier *= 10;
// }
// }



// var romanNumeral = function(parts) {
//
// 	var numbers = [1, 5, 10, 50, 100, 500, 1000];
// 	var numerals = ["I", "V", "X", "L", "C", "D", "M"];
// 	var otherNums = [2, 3, 4, 6, 7, 8, 9];
// 	var otherNumers = ["II", "III", "IV", "VI", "VII", "VIII", "IX"];
//
//
//
// 	if (numbers.indexOf(parts) > -1) {
// 		for (var i = 0; i < numbers.length; i++) {
// 			if (numbers[i] === parts) {
// 				var symbol = numerals[i]
// 				return symbol;
// 			}
// 		}//end of for 1 loop
// 	} else if (otherNums.indexOf(parts) > -1) {
// 		for (var i = 0; i < otherNums.length; i++) {
// 			if (otherNums[i] === parts) {
// 				var symbol = otherNumers[i]
// 				return symbol;
// 			}
// 		}//end of for 2 loop
// 	} else {
// 		return ("enter a valid number");
// 	}
//
//
//
// } //end of function
