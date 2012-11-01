/*global angular: true*/
"use strict";

angular.module('RegexpFilterModule', [])
	.filter('regexp', function () {
		return function (items, key, string) {
			if (!(items instanceof Array)) {
				return items;
			}

			try {
				var regexp = new RegExp(string, "i");

				return items.filter(function (item) {
					return regexp.test(item[key]);
				});
			} catch (err) {
				return items;
			}
		};
	});
