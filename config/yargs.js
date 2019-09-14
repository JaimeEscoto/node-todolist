const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'

}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tares'
}
const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion
    }).command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra una tarea de la bd', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}