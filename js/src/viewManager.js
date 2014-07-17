define(function(require) {
    'use strict';

    var d3 = require('d3'),
        config = require('config'),
        i18n = require('i18n'),
        eventManager = require('eventManager');

    return {


        addRecord: function() {
            var currentEvent = {
                title: $('#title').val(),
                startDate: moment($('#startDate').val()),
                endDate: moment($('#endDate').val()),
                message: $('#message').val()

            };
            eventManager.addEvent(currentEvent);
        },

        displayEvents: function() {
            var me = this,
                data = eventManager.get(),
                dObject = d3.select('.listContainer')
                .selectAll('p')
                .data(data);
            dObject.enter()
                .append('p')
                .on('click', function(d, i) {
                    var current = _.find(data, function(dataCurrent) {
                        return d.id === dataCurrent.id;

                    }),

                     $deleteButton = $('#delete'),
                     $messageBox = $('.message');

                    $messageBox.css('visibility', 'visible');
                    $deleteButton.css('visibility', 'visible');
                    $('#title').val(current.title);
                    $('#startDate').val(current.startDate);
                    $('#endDate').val(current.endDate);
                    $('#message').val(current.message);

                    $deleteButton.unbind('click');
                    $deleteButton.click(function() {
                        eventManager.delete(i);
                        $messageBox.css('visibility', 'hidden');
                        $deleteButton.css('visibility', 'hidden');
                        me.displayEvents();
                    });

                })
                .text(function(d, i) {
                    return (i + 1) + ' ' + d.title + ' ' +
                        moment(d.startDate).format(config.formatDate) + ' - ' +
                        moment(d.endDate).format(config.formatDate);
                })
                .attr('id', function(d, i) {
                    return d.id;
                })
                .append('div')
                .text(function(d) {
                    return d.message;
                });

            dObject.exit().remove();
        },
        displayMap: function(WIDTH, HEIGHT) {
            var
                main = d3.select('.map'),
                start = 'March 8 2011',
                first = d3.time.day.round(d3.time.day.offset(new Date(2014, 2, 3, 13, 0, 0), 0)),
                last = d3.time.day.round(d3.time.day.offset(new Date(2014, 2, 3, 13, 0, 0), 1)),
                format = d3.time.format(i18n.formatTime), //                                                      ?????
                time = d3.time.hour.range(first, last, 2),
                svg = main.append('svg');
            svg.selectAll('text')
                .data(time)
                .enter()
                .append('text')
                .text(function(d) {
                    return format(d);
                })
                .attr('x', 5)
                .attr('y', function(d, i) {
                    return (HEIGHT - 35) * (i * 2 + 1) / 25;
                });
            svg
                .selectAll('line')
                .data(time)
                .enter()
                .append('line')
                .attr('x1', 50)
                .attr('y1', function(d, i) {
                    return (HEIGHT - 35) * (i * 2 + 1) / 25;
                })
                .attr('x2', WIDTH - 30)
                .attr('y2', function(d, i) {
                    return (HEIGHT - 35) * (i * 2 + 1) / 25;
                });
            svg
                .append('line')
                .attr('x1', 50)
                .attr('y1', 0)
                .attr('x2', 50)
                .attr('y2', HEIGHT - 30);
        }

    };

});