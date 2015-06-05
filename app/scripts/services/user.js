/*globals Parse*/
'use strict';

/**
 * @ngdoc service
 * @name donnellyApp.Guest
 * @description
 * # Guest
 * Factory in the donnellyApp.
 */
angular.module('donnellyApp')
  .factory('Guest', function($q) {
    Parse.initialize('DrwmMQpD1azsyeh1QYd8gRcbsdS8YwiwOa54hWEi', 'pHCsDo6rgpLxlxXyUvxpVr2BZFmG7JBKgjdKAQpm');

    var Guest = Parse.Object.extend('guest', {
        // Instance methods
    }, {
        // Class methods

        getById: function(id) {
            var defer = $q.defer();

            var query = new Parse.Query(this);
            query.equalTo('objectId', id);
            query.find({
                success: function(results) {
                    console.log('got the guest');
                    defer.resolve(results);
                },
                error: function(e) {
                    defer.reject(e);
                }
            });

            return defer.promise;
        }
    });
 
    // Title property
    Object.defineProperty(Guest.prototype, 'name', {
      get: function() {
        return this.get('name');
      },
      set: function(aValue) {
        this.set('name', aValue);
      }
    });
 
    return Guest;
});
