const mysql = require('mysql')

exports.getJsonNetflix = (req, res) => {
    console.log("holaa")
    const conectionParams = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'fakeNetflix'
    }


    let resultados = {}

    const connection = mysql.createConnection(conectionParams)

    connection.connect()

    connection.query("select * from netflix", async (error, results, fields) => {
        // const [id, title, url] = (results[0])


        res.json(results)
    })


}