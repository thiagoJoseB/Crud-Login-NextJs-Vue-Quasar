const {cadastroUsuario} = require('../services/usuarioService');
const {login} = require('../services/usuarioService');

const cadastro = async (req, res) => {
    const {nome, senha, email} = req.body;
    try{
        const token = await cadastroUsuario(nome, senha, email);
        res.status(201).json({token}); 
    }catch (error){
        res.status(400).json({message: error.message});
    }
}

const login = async (req, res) => {
    const {email, senha} = req.body;
   
    try{
        const token = await login(senha, email);
        res.status(201).json({token}); 
    }catch (error){
        res.status(400).json({message: error.message});
    }
}



module.exports = {
    cadastro,
    login,
}