
const fs = require('fs');

require('colors');


const crearArchivo = async(base, listar, hasta) => {
    try{
        let salida = '';
        let consola = '';
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
        }
        if(listar == true){
            console.log('====================='.green);
            console.log(`   Tabla del ${base}`);
            console.log('====================='.green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
    } catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo 
}





