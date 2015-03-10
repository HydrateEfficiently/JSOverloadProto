define(function () {

	function isFunction(value) {
		return typeof(value) === "function";
	}

	return {
		isFunction: isFunction
	};
	
});