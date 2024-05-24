import { cadastroUsuario } from '../../../api/services/usuarioService';
import corsOptions  from '../../../api/middlewares/cors';

export default async function handler(req, res) {
  corsOptions(req, res, async  () => {
    if (req.method === 'POST') {
      const { nome, email, senha } = req.body;
      try {
        const token = await cadastroUsuario(nome, email, senha);
        res.status(201).json({ message: 'Cadastrado realizado com sucesso!', token });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }

    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  });
}