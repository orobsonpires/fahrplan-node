const snekfetch = require('snekfetch');
const append_query = require('append-query');
const dateFormat = require('dateformat');
const api_clean_url = 'https://open-api.bahn.de/bin/rest.exe/departureBoard';

function getDepartureBoard(authKey, stopId, atThisDate, format) {
	
	let date = dateFormat(atThisDate, 'yyyy-mm-dd');
	let fromThisTime = dateFormat(atThisDate, 'HH:mm');
	
	let parameters = 'authKey=' + authKey + '&lang=de&' + 'id=' + stopId + '&date='+date + '&time='+ fromThisTime + '&format=' + format;
	
	let url = append_query(api_clean_url, parameters);
	
    return new snekfetch('GET', url)
    .then(res => res.body)
    .then(body => body.result_type == 'no_results' ? Promise.reject(null) : body);
}

function journeyDetail(journeyDetailRef) {
	return new snekfetch('GET', url)
    .then(res => res.body)
    .then(body => body.result_type == 'no_results' ? Promise.reject(null) : body);
}

function getDepartureBoardAsJson(authKey, stopId, atThisDate) {
	return getDepartureBoard(authKey, stopId, atThisDate, 'json');
}

function getDepartureBoardAsXml(authKey, stopId, atThisDate) {
	return getDepartureBoard(authKey, stopId, atThisDate, 'xml');
}

module.exports = Object.assign({
	getDepartureBoardAsJson,
	getDepartureBoardAsXml,
	journeyDetail,
    version: require('./package.json').version
});
