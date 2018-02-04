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
			chats: [],
			userInput: '',
			message: '',
			errorMessage: ''
		}
	},
	methods:{
		askQuestion: function (question) {
			var y = '💁 '
			var x = y.concat(question)
			this.chats.push(x)
			AXIOS.get(`http://hack2.nuance.mobi/CognitivePlatform/Question?teamKey=team-lvmrbdxshm-mghk&question=` + encodeURIComponent(question))
		.then(response => {
			// JSON responses are automatically parsed.
			var answer = response.data.answers[0].summary
			var bot = '🕵 '
			var final = bot.concat(answer)
			this.chats.push(final)
			// this.message = response.data.answers[0].summary
			this.userInput = ''
		})
		.catch(e => {
			this.errorMessage = e;
		});
		}
	}
}
