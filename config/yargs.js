const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea'

        }
    }).command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea'

        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tares'
        }

    })
    .help()
    .argv;

module.exports = {
    argv
}