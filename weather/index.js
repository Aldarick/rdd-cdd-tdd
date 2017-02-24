'use strict';

const YQL = require('yql');
const _ = require('lodash');


/**
    The function returns the weather of a given city
    @param {string[]} opts - The options : opts[0] : city, opts[0] : country
    @param {} - The callback function

*/

module.exports = (opts, callback) => {
	opts = opts || [];

	let query;

	if (_.isEmpty(opts)) {
		query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="Dhaka, Bangladesh")');
	} else {
        // opts[0] : city, opts[0] : country
		query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + opts[0] + ', ' + opts[1] + '")');
	}

	query.exec((err, response) => {
		if (err) {
			return callback(err);
		}

		callback(null, response);
	});
};
