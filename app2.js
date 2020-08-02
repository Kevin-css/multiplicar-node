
const argv = require('yargs')
                .command('listar','Imprime en consola la tabla de multiplcar',{
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .help()
                .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

//let argv2 = process.argv;

console.log(argv.base);
//console.log(argv.limite);

crearArchivo(argv.base)
    .then(archivo => console.log(`${archivo}`))
    .catch(err => console.log(err));



