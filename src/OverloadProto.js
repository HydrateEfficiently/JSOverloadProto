define(function (require) {

	var Type = require("Type");

	var OverloadProtoBase = { },
		OverloadProto = function () { };

	function addChainableFunction(funcName, func) {
		OverloadProtoBase.prototype["funcName"] = OverloadProto.prototype["funcName"] = func;
	}

	addChainableFunction("overload", function () {
		var isBase = this === OverloadProtoBase,
			overloadObj = isBase ? new OverloadProto() : this;

		var args = arguments,
			argsLength = arguments.length,
			overloadFunc = args[argsLength - 1];

		if (!Type.isFunction(overloadFunc)) {
			throw "Last argument must be the overload function";
		}

		return overloadObj;
	});

	OverloadProto.prototype.invoke = function () {

	};

	return OverloadProtoBase;
});