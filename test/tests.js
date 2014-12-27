define(function() {
  QUnit.start();

  module('jQuery');

  test('is a function', function() {
    expect(1);
    stop();
    require(['jquery'], function($) {
      start();
      strictEqual(typeof $, 'function', 'is a function');
    });
  });



});
