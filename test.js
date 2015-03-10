(function () {

	function getLibraryScriptPath(scriptFileName) {
		return "../lib/" + scriptFileName;
	}

	require.config({
		baseUrl: "src",
		paths: {
			"lodash": getLibraryScriptPath("lodash.compat-2.4.1")
		}
	});

	require(["OverloadProto"], function (OverloadProto) {

		function testFunction() {
			OverloadProto
				.overload(function () {
					console.log("testFunction() called");
				}, "string", "defaultString")
				.overload(function (string) {
					
				})
				.invoke();
		}

		testFunction();
	});

} ());

