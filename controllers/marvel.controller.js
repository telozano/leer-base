const seguridad = require('../services/seguridad')
const mysqlService = require("../services/db")
const marvelModel = require('../models/marvel.relacional.model')
const fs = require("fs");


const mysql = new mysqlService();

const listarMarvels = (req, res) => {
    mysql.consultar('select * from marvels')   
    return res.status(200).send({ ok: true })
}


module.exports = {
    listarMarvels
}