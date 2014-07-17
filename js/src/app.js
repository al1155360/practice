define(function(require) {
    'use strict';

    var d3 = require('d3'),

        eventManager = require('eventManager'),
        hewManager = require('viewManager');


    return {
        start: function() {
            var WIDTH = innerWidth,
                HEIGHT = innerHeight,
                indent = 30,
                partition = 1/2,
                main = d3.select('.map'),
                $deleteButton = $('#delete'),
                $messageBox = $('.message');

            main
                .style('width', ((WIDTH - indent) *partition + 'px'))
                .style('height', (HEIGHT - indent) + 'px');


            d3
                .select('.editor')
                .attr('width', (WIDTH - indent) *partition + 'px')
                .attr('height', (HEIGHT - indent) *partition + 'px');

            hewManager.displayEvents();

            hewManager.displayMap((WIDTH-indent) *partition, HEIGHT-indent);



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