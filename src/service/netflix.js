const { listNetflix } = require('../model/netflix')
function getListNetflix() {

    const js = [{
        nombre: 'alejandro',
        apellido: 'carpio'
    }]

    const json = listNetflix(js)

    const valor = 'hola'
    return (json)
}

module.exports = { getListNetflix }