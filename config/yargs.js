const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Imprime la tabla en consola'
    })
    .option('li', {
        alias: 'limite',
        type: 'number',
        default: 10,
        describe: 'Límite de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error('La base deber ser un número')
        }
        if (isNaN(argv.li)) {
            throw new Error('El límite deber ser un número')
        }
        return true
    })
    .argv;

module.exports = {
    argv
}