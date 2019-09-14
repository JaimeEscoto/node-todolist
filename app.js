//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log('Creando tarea');

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