const {Sequelize} = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{
    host : process.env.DB_HOST,
    dialect: 'mysql',
});

const conexao = async () =>{
    try{
        await sequelize.authenticate();
        console.log("Conexão realizada com sucesso!");
    }catch(error){
        console.log("Ocorreu um erro ao realizar conexão!", error);
    }
}


module.exports = {sequelize, conexao};

