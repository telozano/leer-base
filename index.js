if (typeof process.env.NODE_ENV === 'undefined') {
    require('dotenv').config()
}

const cron = require('node-cron');
const app = require('./app')
// const mongoose = require('mongoose')
const axios = require('axios')
const MysqlClass = require('./services/db');
// const pokemonModel = require('./models/pokemon.model');
const Marvel = require('./models/marvel.relacional.model');
const http = require('http');
const sql = new MysqlClass();


const port = process.env.PORT

console.log(port)
marvel()

async function marvel(){
     try {
            console.log("antes de autenticar")
            await sql.autenticar()
            console.log("base ok")
            app.listen(port, () => {
                console.log(`Servidor cargado en el puerto ${port}`)
            })
     } 
     catch (err) {
         console.log("error "+err)
     }
 }
