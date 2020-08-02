const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}.txt`);
            //console.log('The file has been saved!');
        });

    });

}

let listarTabla = (base, limite) => {

    if (!Number(base)) {
        console.log(`El valor introducido '${base}' no es un número`);
        return;
    }

    let data = '';

    for (let index = 1; index <= limite; index++) {
        data += `${base} * ${index} = ${base * index}\n`;
    }

    console.log(`\n${data}`);

}

let listarTabla_colors = (base, limite) => {

    console.log('=================='.green);
    console.log(`tabla de ${base}`.blue);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }

}

module.exports = {
    crearArchivo,
    listarTabla,
    listarTabla_colors
    //,....
}
