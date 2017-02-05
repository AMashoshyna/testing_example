(function() {
	function Calc() {};
	Calc.prototype.sum_correct = function(a, b) {
		return a + b;
	}
	Calc.prototype.sum_with_mistake = function(a, b) {
		return a;
	}

	window.Calc = Calc;
})();