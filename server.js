var express = require('express')
var app = express()
var PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, function (err) {
	if (err) return console.log('Error'), process.exit(1);

	console.log('Corriendo en el puerto: ', PORT);
})
