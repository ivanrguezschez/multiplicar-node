//$node app listar --base=2 --limite=5
//$node app crear --base=2

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help() // node app listar --help o node app --help me muestra la ayuda
    .argv;

module.exports = {
    argv
}