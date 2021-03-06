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
        getAll: function() {
            var defer = $q.defer(),
                query = new Parse.Query(this),
                formatResult = function(data) {
                    var objects = [],
                        i;
                    
                    for(i = 0; i < data.length; i += 1) {
                        objects.push(data[i].toJSON());
                    }

                    return objects;
                };
    
            query.limit(1000);
            query.ascending('objectId');
            query.find().then(function querySuccess(result) {
                defer.resolve(formatResult(result));
            });

            return defer.promise;
        },
        getById: function(id) {
            var defer = $q.defer();

            var query = new Parse.Query(this);
            query.get(id, {
                success: function(results) {
                    defer.resolve(results);
                },
                error: function(e) {
                    defer.reject(e);
                }
            });

            return defer.promise;
        },
    });
 
    // Name property
    Object.defineProperty(Guest.prototype, 'name', {
      get: function() {
        return this.get('name');
      },
      set: function(aValue) {
        this.set('name', aValue);
      }
    });
 
    // Attending property
    Object.defineProperty(Guest.prototype, 'attending', {
      get: function() {
        return this.get('attending');
      },
      set: function(aValue) {
        this.set('attending', aValue);
      }
    });

    // ceremony property
    Object.defineProperty(Guest.prototype, 'ceremony', {
      get: function() {
        return this.get('ceremony');
      },
      set: function(aValue) {
        this.set('ceremony', aValue);
      }
    });

    return Guest;
});
