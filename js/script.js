var romanNumeral = function(input) {

	// var numbers = [1, 5, 10, 50, 100, 500, 1000];
	// var numerals = ["I", "V", "X", "L", "C", "D", "M"];
	var ones = ["","1","2", "3", "4", "5", "6", "7", "8", "9"];
	var onesNumerals = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
	var tens = ["",10,20, 30, 40, 50, 60, 70, 80, 90];
	var tensNumerals = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
	var hundreds = ["",10,20, 30, 40, 50, 60, 70, 80, 90];
	var hundredsNumerals = ["", "I", "II", "III", "IV", "VI", "VII", "VIII", "IX"];

	var array = input.split("");
	var symbol;

alert(array);
	if (array.length === 1) {
		for (var i = 1; i < ones.length; i++) {
			if (ones[i] === array[0]) {
				// debugge2r;
				symbol = onesNumerals[i]
			}
	}
	return symbol;

}
		//end of for length 1 loop
	// } else if (otherNums.indexOf(input) > -1) {
	// 	for (var i = 0; i < otherNums.length; i++) {
	// 		if (otherNums[i] === input) {
	// 			var symbol = otherNumers[i]
	// 			return symbol;
	// 		}
	// 	}//end of for 2 loop
	// } else {
	// 	return ("enter a valid number");
	// }



} //end of function

// var array = [];
// var romanNumeral = function(number) {
// 	for (var i = 0; i < number; i++) {
// 		array.push("I");
//
// }
// var join = array.join("");
// return join;
//
// }
//  if (number % 10 = 4) {
//  array.push("IV")
//  } elseif (number % 5 = 0 && number % 10 != 0) {
//  array.push("V")
// } elseif ...






$(document).ready(function() {

		$("form").submit(function(event) {
			var number = $("input#number").val();
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
