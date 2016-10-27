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


$(document).ready(function() {

		$("form").submit(function(event) {
			var number = $("input#number").val();
			var result = romanNumeral(number);
			$("#output").text(result);
			event.preventDefault();

		});//end of submit function
});//Document ready end
