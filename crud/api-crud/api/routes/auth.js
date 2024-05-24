const express = require('express');
const {cadastro} =  require('../controllers/usuarioController');
const {login} =  require('../controllers/usuarioController');

const router = express.Router();

router.post('/cadastro', cadastro);
router.login('/login', login);

module.exports = router;
