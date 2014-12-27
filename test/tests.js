define(function () {
    QUnit.start();
    module('Switcher');

    test('is should be different with last results', function () {
        stop();
        require(['jquery', 'libs/Switcher'], function ($, Switcher) {
            start();
            var lastResults = [1 ,2 ,3 ,4];
            var members = [1 ,2 ,3 ,4];
            notStrictEqual(Switcher.auto(members).withLast(lastResults), lastResults , 'is different');
        });
    });
});
