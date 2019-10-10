const request = require('request')

const url = 'https://api.darksky.net/forecast/afef0f99d54e0232c1a8a3c5a9811a5d/-27.3548,-48.3257?lang=pt'
const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Florianopolis.json?access_token=pk.eyJ1IjoiYW50b25pb2Jlc2VuIiwiYSI6ImNrMWllMTJ5aTBoYTEzZHBrbTJpNXlzZDAifQ.XTse3X2bpHTyvn1Oxb2j6Q'

// request({url: url, json: true}, (error, response) => {
// 	if(error) {
// 		console.log('Não foi possível conectar ao servidor')
// 	} else if(response.body.code) {
// 		console.log('Não foi possível encontrar essa localização')
// 	} else {
// 	console.log(response.body.daily.data[0].summary+'. A temperatura está em '+response.body.currently.temperature+
// 		' com uma chance de precipitação em '+response.body.currently.precipProbability)
// 	}	
// })

request({url: url2, json: true}, (error, response) => {
	if(error) {
		console.log('Não foi possível conectar ao servidor')
	} else if(response.body.features.length === 0) {
		console.log('Não foi possível encontrar a localização fornecida')
	} else {
	console.log('Longitude: '+response.body.features[0].center[0]+' Latitude: '+response.body.features[0].center[1])
	}
})