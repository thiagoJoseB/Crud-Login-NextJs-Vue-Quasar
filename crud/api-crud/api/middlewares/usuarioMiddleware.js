const jwt = require('jsonwebtoken');
require('dotenv').config();

const usuarioMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Sem token, autorização negada' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token não é válido' });
  }
};

module.exports = usuarioMiddleware;
