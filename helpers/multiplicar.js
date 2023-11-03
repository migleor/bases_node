import { writeFileSync } from 'node:fs';
import colors from 'colors';

const createFileTable = async ( base = 1, list=false, limit=1 ) => {
    try {
        let salida='';
        let prompt='';
        console.clear();
        prompt += colors.yellow('===============================\n');
        prompt += colors.yellow(`         TABLA DEL: ${base}    \n`);
        prompt += colors.yellow('===============================\n');
        for(let a=1; a<=limit; a++){
            salida += `${base} X ${a} es: ${ base * a } \n`;
            prompt += `${colors.blue(base)} ${colors.red('x')} ${colors.cyan(a)} ${colors.red('=')} ${ colors.green.bold(base * a) } \n`;
        }
        if(list){
            console.log(prompt)
        }
        const nameFile = `tabla-${base}.txt`;
        const path = `storage/${nameFile}`;            
        writeFileSync(path, salida);    
        return nameFile
    } catch (error) {
        throw (error)
    }        
}

export { createFileTable };