/**
 * Created by al on 08.07.14.
 */
define( function (require) {
    'use strict';

    var myModule2=require('myModule2');

    return {
        sayHello: function (  ) {
            var name=myModule2.getName();
            alert(name);
        }
    };
} );