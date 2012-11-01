/*global productQuery:true*/
"use strict";

angular.module('ProductsApp', [])
	.controller('ProductListController', function ($scope) {
		$scope.query = "";
		$scope.products = productQuery.products;
	});
