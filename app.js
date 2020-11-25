//$node app listar --base=2 --limite=5
//$node app crear --base=2
/*
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help() // node app listar --help o node app --help me muestra la ayuda
    .argv;
*/
// Todo lo comentado va al archivo config/yargs.js
const argv = require('./config/yargs').argv;

const multiplicar = require('./multiplicar/multiplicar.js'); // .js en un require es opcional

// O podriamos usar la desestructuracion para no tener que usar multiplocar.crearArchivo
//const { crearArchivo } = require('./multiplicar/multiplicar.js'); // .js en un require es opcional

//let base = 2;

// Pasar la base por linea de comandos $node app --base=2  (argv=[node, app, --base=5])
// Forma rápida, mas adelante veremos una forma mas optima, hay paquetes para gestionar los parámetros
// y sus validaciones que nos envian por línea de comandos.
//let parametro = process.argv[2];
//let base = parametro.split('=')[1];

// Usando args para la gestión de los parámetros de línea de comandos

let comando = argv._[0];
switch (comando) {
    case 'listar':
        multiplicar.listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        multiplicar.crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${archivo}`) )
            .catch( err => console.log(err) );
        break;
    default:
        console.log('Comando no reconocido');
} 