/*global productQuery:true*/
"use strict";

angular.module('ProductsApp', [])
	.controller('ProductListController', function ($scope) {
		$scope.products = productQuery.products;
	});
