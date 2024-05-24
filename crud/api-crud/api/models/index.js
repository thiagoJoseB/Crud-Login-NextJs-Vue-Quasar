const Usuario = require('./User');

const initModels = async () =>{
    await Usuario.sync();
};

module.exports = initModels;