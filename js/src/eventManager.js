define(function(require) {
	'use strict';

	var data = JSON.parse(localStorage.getItem('data'));

	$(window).unload(data, function(data) {
		localStorage.setItem('data', JSON.stringify(data.data));

	});

	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return {

		generateId: function() {
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
				s4() + '-' + s4() + s4() + s4();
		},


		addEvent: function(dataEvent) {

			data.id = this.generateId();
			data.push(dataEvent);
			console.log('data in setEvent: ', data);
		},

		modify: function(key) {

		},

		get: function() {
			return data;
		},
		delete: function(key) {

			data.splice(key, 1);
		}

	};

});