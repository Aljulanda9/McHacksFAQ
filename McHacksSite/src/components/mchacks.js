import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
	baseURL: backendUrl,
	headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

export default {
	name: 'mchacks',
	data () {
		return {
			participants: [],
			userInput: '',
			message: '',
			errorMessage: ''
		}
	},
	methods:{
		askQuestion: function (question) {
			AXIOS.get(`http://hack.nuance.mobi/CognitivePlatform/Question?teamKey=team-ymolhxfofk-mghk&question=` + encodeURIComponent(question))
		.then(response => {
			// JSON responses are automatically parsed.
			this.message = response.data.answers[0].summary
		})
		.catch(e => {
			this.errorMessage = e;
		});
		}
	}
}
