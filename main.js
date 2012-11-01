/*global angular: true*/
"use strict";

angular.module('ProductsApp', ['RegexpFilterModule', 'ShopApiModule', 'ngSanitize'])
	.factory('productTranslator', function () {
		return function (product) {
			product.image = product.images.map(function (item) {
				var imageSizeName = item.sizeName.toLowerCase();
				product.images[imageSizeName] = item;
			});

			return product;
		};
	})
	.controller('ProductListController', function ($scope, ShopApi) {
		$scope.query = "";
		$scope.data = ShopApi.search({endpoint: 'apiSearch', cat: 'mens-ties'});
	})
	.controller('ProductController', function ($scope, productTranslator) {
		$scope.product = productTranslator($scope.product);
	})
	.controller('ProductDetailController', function ($scope, ShopApi, $routeParams, productTranslator) {
		ShopApi.search(
			{endpoint: 'apiSearch', cat: 'mens-ties', prodId: $routeParams.productId},
			function (data) {
				$scope.product = productTranslator(data.products[0]);
			}
		);
	})
	.directive('productSummary', function () {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/product_summary.html',
			controller: 'ProductController',
			scope: {
				product: '=',
			}
		};
	})
	.directive('productDetail', function () {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/product_detail.html',
			controller: 'ProductController',
			scope: {
				product: '=',
			}
		};
	})
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {templateUrl: 'templates/front_page.html', controller: 'ProductListController'})
			.when('/product/:productId', {templateUrl: 'templates/product_detail.html', controller: 'ProductDetailController'})
			.otherwise({redirectTo: '/'});
	}]);
