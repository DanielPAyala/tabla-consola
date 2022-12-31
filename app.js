const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');

console.clear();
console.log(argv);

const { base, listar, limite } = argv;

crearArchivo(base, listar, limite)
    .then((res) => console.log(res))
    .catch(err => console.log(err));