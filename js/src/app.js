define(function(require) {
    'use strict';

    var d3 = require('d3'),

        events = require('eventManager'),
        hew = require('hewManager');


    return {
        start: function() {
            var WIDTH = innerWidth,
                HEIGHT = innerHeight,
                main = d3.select('.map');

            main
                .style('width', ((WIDTH - 30) / 2 + 'px'))
                .style('height', (HEIGHT - 30) + 'px');


            d3
                .select('.editor')
                .attr('width', (WIDTH - 30) / 2 + 'px')
                .attr('height', (HEIGHT - 30) / 2 + 'px');

            hew.displayEvents();

            hew.displayMap((WIDTH) / 2, HEIGHT);



            $('#add').click(function() {
                // debugger;
                $('.message').css('visibility', 'visible');
                $('#delete').css('visibility', 'hidden');
            });
            $('#cancel').click(function() {
                $('.message').css('visibility', 'hidden');
                $('#delete').css('visibility', 'hidden');
            });
            $('#save').click(function() {
                hew.addRecord();
                $('.message').css('visibility', 'hidden');
                $('#delete').css('visibility', 'hidden');
                hew.displayEvents();
            });

        }
    };

});