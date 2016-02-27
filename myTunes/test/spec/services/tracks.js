'use strict';

describe('Service: tracks', function () {

  // load the service's module
  beforeEach(module('myTunesApp'));

  // instantiate service
  var tracks;
  beforeEach(inject(function (_tracks_) {
    tracks = _tracks_;
  }));

  it('should do something', function () {
    expect(!!tracks).toBe(true);
  });

});
