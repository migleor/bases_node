import { writeFileSync } from 'node:fs';

const createFileTable = async ( base = 1, list=false, limit=1 ) => {
    try {
        let salida='';
        let prompt='';
        prompt += '===============================\n';
        prompt += `         TABLA DEL: ${base}    \n`;
        prompt += '===============================\n';
        for(let a=1; a<=limit; a++){
            salida += `${base} X ${a} es: ${ base * a } \n`;
            prompt += `${base} X ${a} es: ${ base * a } \n`;
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