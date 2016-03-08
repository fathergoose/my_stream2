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

    var audio = AV.Player.fromURL('/audio/intro.flac');

    // Public API here
    return audio;
  });
