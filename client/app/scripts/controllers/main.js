'use strict';

/**
 * @ngdoc function
 * @name myTunesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myTunesApp
 */
angular.module('myTunesApp')
  .controller('MainCtrl', function (audio, player, tracks, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.message = "hello";
    $scope.audio = audio;
    $scope.player = player;
    $scope.tracks = tracks.query();

  });
