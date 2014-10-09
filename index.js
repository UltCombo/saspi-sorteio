'use strict';

var fs = require('fs'),
	presentes = require('./presentes.json'),
	sorteados = require('./sorteados.json');

presentes = presentes.filter(function(participante) {
	return sorteados.indexOf(participante.id) === -1;
});

if (!presentes.length) {
	console.log('Todos participantes presentes já foram sorteados.');
	return;
}

var sorteado = presentes[ Math.floor(Math.random() * presentes.length) ];

console.log( sorteado.id, sorteado.nome );

sorteados.push(sorteado.id);
fs.writeFileSync('sorteados.json', JSON.stringify(sorteados, null, '  '));
