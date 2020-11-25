const fs = require('fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            // Para que no siga ejecutando el código
            return;
        }
        if (!Number(limite)) {
            console.log(`El valor del límite introducido ${limite} no es un número`);
            // Para que no siga ejecutando el código
            return;
        }

        let data = '';

        for (let i=1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        // Guardamos la tabla de multiplicar en un archivo
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            }
            resolve(`tabla-${base}-al-${limite}.txt`);
        });        
    });
}

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        console.log(`El valor de la base introducido ${base} no es un número`);
        // Para que no siga ejecutando el código
        return;
    }
    if (!Number(limite)) {
        console.log(`El valor del límite introducido ${limite} no es un número`);
        // Para que no siga ejecutando el código
        return;
    }

    for (let i=1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

// Formas de exportar
// molule.exports.crearArchivo = (base) => .....
module.exports = {
    crearArchivo, // ES6, sinó seria crearArchivo: crearArchivo
    listarTabla
}