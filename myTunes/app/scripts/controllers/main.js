'use strict';

/**
 * @ngdoc function
 * @name myTunesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myTunesApp
 */
angular.module('myTunesApp')
  .controller('MainCtrl', function (audio, player, $scope, $log, uiUploader) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.message = "hello";
    $scope.audio = audio;
    $scope.player = player;

    $scope.btn_remove = function(file) {
      $log.info('deleting=' + file);
      uiUploader.removeFile(file);
    };
    $scope.btn_clean = function() {
      uiUploader.removeAll();
    };
    $scope.btn_upload = function() {
      $log.info('uploading...');
      uiUploader.startUpload({
        url: '/api/tracks',
        concurrency: 2,
        onProgress: function(file) {
          $log.info(file.name + '=' + file.humanSize);
          $scope.$apply();
        },
        onCompleted: function(file, response) {
          $log.info(file + 'response' + response);
        }
      });
    };
    $scope.files = [];
    var element = document.getElementById('file1');
    element.addEventListener('change', function(e) {
      var files = e.target.files;
      uiUploader.addFiles(files);
      $scope.files = uiUploader.getFiles();
      $scope.$apply();
    });
  });
