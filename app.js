
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

require('colors');

// const [, , arg3 = 'base=5' ] = process.argv;
// const [, base = 5] = arg3.split('=');


// const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creada'))
    .catch(err => console.log(err));







