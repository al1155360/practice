define(function(require) {
    'use strict';

    var d3 = require('d3'),

        eventManager = require('eventManager'),
        hewManager = require('viewManager');


    return {
        start: function() {
            var WIDTH = innerWidth,
                HEIGHT = innerHeight,
                main = d3.select('.map'),
                $deleteButton = $('#delete'),
                $messageBox = $('.message');

            main
                .style('width', ((WIDTH - 30) / 2 + 'px'))
                .style('height', (HEIGHT - 30) + 'px');


            d3
                .select('.editor')
                .attr('width', (WIDTH - 30) / 2 + 'px')
                .attr('height', (HEIGHT - 30) / 2 + 'px');

            hewManager.displayEvents();

            hewManager.displayMap((WIDTH) / 2, HEIGHT);



            $('#add').click(function() {
                // debugger;
                $messageBox.css('visibility', 'visible');
                $deleteButton.css('visibility', 'hidden');
            });
            $('#cancel').click(function() {
                $messageBox.css('visibility', 'hidden');
                $deleteButton.css('visibility', 'hidden');
            });
            $('#save').click(function() {
                hewManager.addRecord();
                $messageBox.css('visibility', 'hidden');
                $deleteButton.css('visibility', 'hidden');
                hewManager.displayEvents();
            });

        }
    };

});