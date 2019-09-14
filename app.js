//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./todo/todo');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log('Creando tarea');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('Mostrando todas las tareas por hacer');
        for (let tarea of listado) {
            console.log('---------------'.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('--------------'.green);
        }

        break;
    case 'actualizar':
        console.log('Actualiza las tareas');
        break;
    default:
        console.log('Comando no válido');

        break;
}