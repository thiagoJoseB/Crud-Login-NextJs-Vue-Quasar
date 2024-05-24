/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * @param {() => void} next
 */
export default function cors(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Max-Age', '86400');
    
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
  
    next();
  }
  