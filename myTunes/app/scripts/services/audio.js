'use strict';

/**
 * @ngdoc service
 * @name myTunesApp.audio
 * @description
 * # audio
 * Factory in the myTunesApp.
 */
angular.module('myTunesApp')
  .factory('audio', function ($document) {
    // Service logic
    // ...

    var audio = $document[0].createElement('audio');

    // Public API here
    return audio;
  });
