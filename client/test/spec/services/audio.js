'use strict';

describe('Service: audio', function () {

  // load the service's module
  beforeEach(module('myTunesApp'));

  // instantiate service
  var audio;
  beforeEach(inject(function (_audio_) {
    audio = _audio_;
  }));

  it('it should create and return an HTML5 audio element', function () {
    expect(audio.nodeName).toBe('AUDIO');
  });

});
