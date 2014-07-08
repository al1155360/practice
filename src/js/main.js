requirejs.config( {
    baseUrl: 'src/js',
    urlArgs: "bust=" + (new Date()).getTime(),
    waitSeconds: 0,
    paths  : {
        myapp             : 'app'
    }
} );

require( ['myapp'], function ( App ) {
    'use strict';

    App.start();
} );