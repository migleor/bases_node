import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
    .option('b',{
        alias:'base',
        type:'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .check( (argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base solo puede ser un número';
        }
        return true;
    })
    .option('l',{
        alias:'list',
        type:'boolean',
        demandOption:false,
        default:false,
        describe: 'Mostrar la tabla por consola'
    })
    .option('h', {
        alias:'hasta',
        type:'number',
        demandOption:true,
        describe:'Numero hasta donde se multiplicará la base (maximo 100)',
    })
    .check( (argv, options) => {
        if(isNaN(argv.h)){
            throw 'El valor hasta solo puede ser un número'
        }else if(argv.h>100){
            throw 'El valor hasta no puede ser mayor a 100'
        }
        return true;
    })
    .argv;
export { argv };