require.config({
    paths: {
        //"components": "../bower_components",
        "jquery": "../bower_components/jquery/dist/jquery",
        "underscore": "../bower_components/underscore/underscore",
        "json": "../bower_components/requirejs-plugins/src/json",
        "config": "../config"
    },
    shim: {
        jquery: {
            exports: "$"
        },
        underscore: {
            exports: "_"
        }
    }
});

if (!window.requireTestMode) {
    require(['main'], function(){ });
}





