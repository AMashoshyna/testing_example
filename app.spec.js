//упрощенный пример - функция создается прямо внутри теста

describe("adder", function() {
	function adder(a, b) {
		return a;
	}
	it("should add the arguments", function() {
		expect(adder(2, 2)).toBe(4);
	})
})





/