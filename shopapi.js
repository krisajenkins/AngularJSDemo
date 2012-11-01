/*global angular: true*/
"use strict";

angular.module('ShopApiModule', ['ngResource'])
	.factory('ShopApi', function ($resource) {
		return $resource(
			'http://api.shopstyle.com/action/:endpoint',
			{
				pid: 'uid9569-1706913-35',
				site: 'www.shopstyle.co.uk',
				format: 'JSONP',
				callback: 'JSON_CALLBACK',
			},
			{
				search: {method: "JSONP", params: {count: '50'}},
				get: {method: "JSONP"},
			}
		);
	});
