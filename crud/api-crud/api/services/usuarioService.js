const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/User');
require('dotenv').config();


const hashSenha = async(senha) =>{
    return await bcrypt.hash(senha, 10);
}

const compararSenha = async(senha , hashedSenha) => {
    return await bcrypt.compare(senha, hashedSenha)
}

const gerarToken = (usuario) =>{
    const payload = {id: usuario.id};
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1H'});
  
}
const cadastroUsuario = async(nome, email, senha) =>{
    const hashedSenha = await hashSenha(senha);
    const usuarioExistente = await Usuario.findOne({ where: { email } });

    if (usuarioExistente) {
        throw new Error(' Este email já está em uso.');
    }

    const usuario = await Usuario.create({
        nome,
        email,
        senha: hashedSenha,
    });

   
   
    return gerarToken(usuario);

};

const login = async(email, senha )  =>{
    const usuario = await Usuario.findOne({where: {email}});
    

    if (!usuario) {
        throw new Error('Credenciais invalidas!');
        
    }

    const senhaValida = await compararSenha(senha, usuario.senha);

    if (!senhaValida) {
        throw new Error('Credenciais invalidas!');
        
    }

    const nome = usuario.nome;

    const token = gerarToken(usuario);

    return { token, nome };
    
}

module.exports = {
    cadastroUsuario,
    login,
}