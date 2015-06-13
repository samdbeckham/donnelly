'use strict';

/**
 * @ngdoc filter
 * @name donnellyApp.filter:startsWith
 * @function
 * @description
 * # startsWith
 * Filter in the donnellyApp.
 */
angular.module('donnellyApp').filter('startsWith', function () {
    function startsWith(string, query) {
        var string = string.substr(0, query.length).toLowerCase(),
            query = query.toLowerCase();

        return string === query;
    };

    return function (input, query) {
        var matches = [],
            i;

        if (!input) {
            return;
        }

        for (i = 0; i < input.length; i += 1 ) {
            var key = Object.keys(query)[0];
            if (!query[key]) {
                return;
            }
            if (startsWith(input[i][key], query[key])) {
                matches.push(input[i]);
            }
        }
        return matches;
    };
});
