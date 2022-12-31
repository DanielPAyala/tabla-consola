const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar, limite) => {
    try {
        let salida = '';
        for (let i = 1; i <= limite; i++) {
            salida += `${base} x ${i} = ${i * base}\n`;
        }

        if (listar) {
            console.log(salida.red);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
}


module.exports = {
    crearArchivo
}