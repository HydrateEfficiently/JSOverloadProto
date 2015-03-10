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

	require(["Overloader"], function (Overloader) {

		function Person(name) {
			this.name = name;
		}

		// TODO: remove need for .set() call - make overload available on "the function" (e.g. sayName)
		Person.prototype.sayName = Overloader
			.overload(function () {
				this.sayName(this.name);
			})
			.overload(String, function (name) {
				this.speak("My name is " + name);
			})
			.set();

		Person.prototype.speak = function (phrase) {
			console.log(this.name + " said '" + phrase + "'");
		};

		var michael = new Person("Michael");
		michael.speak("Hi there!");
		michael.sayName();
		michael.sayName("ughh... Not Michael");
	});
} ());

