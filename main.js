/*global productQuery:true*/
"use strict";

angular.module('ProductsApp', ['RegexpFilterModule'])
	.controller('ProductListController', function ($scope) {
		$scope.query = "";
		$scope.products = productQuery.products;
	});
