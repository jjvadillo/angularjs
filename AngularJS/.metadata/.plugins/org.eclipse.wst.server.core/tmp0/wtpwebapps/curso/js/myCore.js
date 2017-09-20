angular.module('myCore', []);

angular.module('myCore').filter("capitalice", function () {
	  return function (s) {
	    if (typeof (s)==="string") {
	      return s.charAt(0).toUpperCase() + 
	          s.substring(1, s.length).toLowerCase();
	    }
	    return s;
	  };
	});

angular.module('myCore').filter("toComaDecimal", function() {
    return function(s) {
        if (typeof(s) === "number") {
            s = s.toString();
        }
        if (typeof(s) === "string") {
            return s.replace(".", ",");
        }
        return s;
    };
});