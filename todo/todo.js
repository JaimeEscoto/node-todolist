const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error(err);

    });
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = [];
    }


}

const crear = (descripcion) => {
    let porHacer = {
        descripcion: descripcion,
        completado: false
    };
    cargarDB();
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}
const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

module.exports = {
    crear: crear,
    getListado: getListado
};