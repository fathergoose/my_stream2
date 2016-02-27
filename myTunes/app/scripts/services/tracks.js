'use strict';

/**
 * @ngdoc service
 * @name myTunesApp.tracks
 * @description
 * # tracks
 * Factory in the myTunesApp.
 */
angular.module('myTunesApp')
  .factory('tracks', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
