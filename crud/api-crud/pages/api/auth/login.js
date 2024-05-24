import { login } from '../../../api/services/usuarioService';
import corsOptions  from '../../../api/middlewares/cors';


export default async function handler(req, res) {
  corsOptions(req, res, async  () => {
    if (req.method === 'POST') {
      const { email, senha } = req.body;
      try {
        const {token , nome} = await login(email, senha);
        res.status(201).json({ message: 'Login realizado com sucesso!', token, nome});
      } catch (error) {
        res.status(400).json({ error: error.message });
      }

    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  });
}