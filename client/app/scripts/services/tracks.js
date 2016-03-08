'use strict';

/**
 * @ngdoc service
 * @name myTunesApp.tracks
 * @description
 * # tracks
 * Factory in the myTunesApp.
 */
angular.module('myTunesApp')
  .factory('tracks', function ($resource) {
    return $resource('/api/tracks/:id.json', null, {
      'update': {method: 'PUT' }
    });
  });
