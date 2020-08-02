// Requireds

//const fs = require('fs'); propios de node.
// const fs = require('express'); externos.
// const fs = require('../fs'); archivos que ya se encuentran en el computador o en nuestro proyecto.

const { crearArchivo } = require('./multiplicar/multiplicar');

// let base = 'abc';

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

//console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`${archivo}`))
    .catch(err => console.log(err));





