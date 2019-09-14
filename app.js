//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const porHacer = require('./todo/todo');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log('Creando tarea');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostrando todas las tareas por hacer');
        break;
    case 'actualizar':
        console.log('Actualiza las tareas');
        break;
    default:
        console.log('Comando no válido');

        break;
}