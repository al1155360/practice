requirejs.config({
    baseUrl: 'js/src',
    urlArgs: "bust=" + (new Date()).getTime(),
    waitSeconds: 0,
    paths: {
        myapp: 'app',
        d3: '../lib/d3',
        jquery: '../lib/jquery-1.11.1',
        moment: '../lib/moment',
        underscore: '../lib/underscore'
    },
    shim: {
        myapp: ['d3']

    }
});

require(['myapp', 'jquery', 'moment', 'underscore'], function(App) {
    'use strict';
    App.start();
});