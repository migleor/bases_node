import { createFileTable } from './helpers/multiplicar.js';
import { argv } from './config/yargs.js';

console.clear();

//console.log(argv);
const base = argv.base;
const list = argv.list;
const limit = argv.hasta;
//console.log(base, list, limit);

createFileTable(base, list, limit)
    .then(nombreArchivo => console.log('El nombre del archivo es: ', nombreArchivo))
    .catch(err => console.log(err));