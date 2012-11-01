/*global productQuery:true*/
"use strict";

angular.module('ProductsApp', ['RegexpFilterModule'])
	.controller('ProductListController', function ($scope) {
		$scope.query = "";
		$scope.products = productQuery.products;
	})
	.controller('ProductController', function ($scope) {
		$scope.product.images.map(function (item) {
			var imageSizeName = item.sizeName.toLowerCase();
			$scope.product.images[imageSizeName] = item;
		});
	});
