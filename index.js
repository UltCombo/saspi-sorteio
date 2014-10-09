var presentes = require('./presentes.json');

var sorteado = presentes[ Math.floor(Math.random() * presentes.length) ];

console.log( sorteado.id, sorteado.nome );

