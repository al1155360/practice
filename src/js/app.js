/**
 * Created by al on 08.07.14.
 */
define( function (require) {
    'use strict';

    var myModule1=require('myModule1');

    return{
        start:function(){
            myModule1.sayHello();
        }
    }

} );