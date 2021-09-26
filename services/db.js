const mysql = require('mysql2');
const { Sequelize } = require('sequelize')

module.exports = class MysqlClass {

     config = mysql.createConnection({
         host: "localhost",
         user: "root",
         password: "root",
         database: "test"
     })

    constructor() {
        if (typeof MysqlClass.instace == "object") {
            return MysqlClass.instace
        }

        this._crearSequelize();
        MysqlClass.instace = this
        return this;
    }

    _crearSequelize() {
        const [host, usuario, password, basedatos] = process.env.MYSQL.split(',')
        this.sequelize = new Sequelize(basedatos, usuario, password, {
            host,
            dialect: 'mysql'
        })

    }

    consultar(consulta){
        try{
            this.config.connect()
            this.config.query(consulta,(err,rows,fields)=>{
                console.log(rows)
            })
        } catch(err){
            console.log(err)
        }
    }

     async autenticar() {
         try {
             const response = await this.sequelize.authenticate()
             console.log(" base de datos relacional conectada ", response)
         } catch (err) {
             console.error(err)
             throw err
         }
     }
}