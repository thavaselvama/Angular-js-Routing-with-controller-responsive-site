var myApp = angular.module("myApp", ["ngRoute","ui.bootstrap"]);
myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "page/main.html",
		controller  : 'mainController'
    })
    .when("/about", {
        templateUrl : "page/about.html",
		controller  : 'aboutController'
    })
    .when("/service", {
        templateUrl : "page/service.html",
		controller  : 'serviceController'
    })
    .when("/gallery", {
        templateUrl : "page/gallery.html",
		controller  : 'galleryController'
    })
	.when("/contact", {
        templateUrl : "page/contact.html",
		controller  : 'contactController'
    });
});
// create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'img/1.jpg'
    },
    {
      image: 'img/2.jpg'
    },
    {
      image: 'img/3.jpg'
    },
    
  ];
		$scope.message = 'Everyone come and see how good I look!';
	});

	myApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});
	myApp.controller('serviceController', function($scope) {
		$scope.message = 'Look! I am an service page.';
	});
	myApp.controller('galleryController', function($scope) {
		$scope.message = 'Look! I am an gallery page.';
	});

	myApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});