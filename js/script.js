var romanNumeral = function(input) {
	var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
	var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
	var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
	var thousands = ["", "M", "MM", "MMM"];
	debugger;
	var array = [];

	if (input > 3999 || input < 1) {
		alert("Please choose a number between 1 and 3,999");
	} else {
		debugger;
		array = input.split("");
		var result = array.map(function(x){
			return parseInt(x);
		})
		if (result.length === 1) {
			result[0] = ones[result[0]];
		} else if (result.length === 2) {
			result[0] = tens[result[0]];
			result[1] = ones[result[1]];
		} else if (result.length === 3) {
			result[0] = hundreds[result[0]];
			result[1] = tens[result[1]];
			result[2] = ones[result[2]];
		} else if (result.length === 4) {
			result[0] = thousands[result[0]];
			result[1] = hundreds[result[1]];
			result[2] = tens[result[2]];
			result[3] = ones[result[3]];
		}
		return result.join("");
	}








} //end of function

// if (array.length === 1) {
// 	for (var i = 1; i < ones.length; i++) {
// 		if (ones[i] === array[0]) {
// 			symbol = onesNumerals[i]
// 		}
// }
// return symbol;
// } else if (array.length === 2) {
// for (var i = 1; i < ones.length; i++) {
// 	if (tens[i] === array[0]) {
// 		symbol = tensNumerals[i] + onesNumerals[i]
// 	} else if (ones[i] === array[1]) {
// 		symbol = onesNumerals[i]
// 	}
// }
// return symbol;
// }

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
