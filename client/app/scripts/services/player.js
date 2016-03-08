'use strict';

/**
 * @ngdoc service
 * @name myTunesApp.player
 * @description
 * # player
 * Factory in the myTunesApp.
 */
angular.module('myTunesApp')
  .factory('player', function (audio) {

    // Varibale declarations
    var playlist = [];
    var paused = false;
    var current = {};

    // Player object
    var player = {
      playlist: playlist,

      current: current,

      playing: false,

      play: function(track) {
        console.log('hello');
        //if (!playlist.length) return; //If playlist is empty, don't try to play anything

        if (angular.isDefined(track)) current.track = track;

        if (!paused) audio.src = current.track

        audio.play();
        player.playing = true;
        paused = false;
      },

      pause: function() {
        audio.pause();
      }
    };

    return player;
  });
