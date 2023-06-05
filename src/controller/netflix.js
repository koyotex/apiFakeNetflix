
const { getListNetflix } = require('../service/netflix')

const getlist = (req, res) => {

    res.send('se envia lista')
    //getListNetflix()

    console.log(getListNetflix())

}

const getForId = (req, res) => {
    res.send(`se obtuvo el ${req.params.id}`)
}

const deleteFromList = (req, res) => {
    res.send(`se elimino de la lista el id ${req.headers.authorization}`)
}

module.exports = { getlist, getForId, deleteFromList }