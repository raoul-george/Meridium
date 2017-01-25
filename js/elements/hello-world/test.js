define(function(require) {

    var view = require("text!./view.html");

	
	function Test(vm) {
		this.init(vm);
	}	

	Test.prototype.init = function(vm) {
		vm.element = vm;
        vm.element.innerHTML = view;
	};

	return Test;

});