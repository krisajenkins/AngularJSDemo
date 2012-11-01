/*global productQuery:true*/
"use strict";

function ProductListController($scope) {
	$scope.products = productQuery.products;
}
