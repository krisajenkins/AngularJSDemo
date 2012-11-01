/*global angular: true*/
"use strict";

angular.module('ProductsApp', ['RegexpFilterModule', 'ShopApiModule'])
	.controller('ProductListController', function ($scope, ShopApi) {
		$scope.query = "";
		$scope.data = ShopApi.search({endpoint: 'apiSearch', cat: 'mens-ties'});
	})
	.controller('ProductController', function ($scope) {
		if ($scope.product.images) {
			$scope.product.images.map(function (item) {
				var imageSizeName = item.sizeName.toLowerCase();
				$scope.product.images[imageSizeName] = item;
			});
		}
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
	});
