app.directive('mySlider', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		 templateUrl: 'js/directives/my-slider/mySlider.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

			activateSlider();

			function activateSlider(){
				$(".mySlider").slick({
					  //dots: true,
			           autoplay: true,
                       autoplaySpeed: 3000,
                       arrows: false,
                       fade: true

				})
			}
			
		}
	};
});