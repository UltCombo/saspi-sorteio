'use strict';

var fs = require('fs'),
	http = require('http'),
	token = fs.readFileSync('./token');

http.get('http://saspi.com.br/get_presentes.php?token=' + token, function(res) {
	var data = '';
	res.on('data', function(chunk) {
		data += chunk;
	});
	res.on('end', function() {
		try {
			var resposta = JSON.parse(data);
		} catch(e) {
			return console.log(data); // possível erro no servidor ou PHP
		}

		if (resposta.error) {
			return console.log(resposta.error); // falha de autenticação, etc.
		}

		fs.writeFileSync('presentes.json', JSON.stringify(resposta, null, '  '));
		console.log('Lista de participantes presentes atualizada com sucesso.');
	});
}).on('error', function(e) {
	console.log('Error: ' + e.message);
});
