import { conexao } from '../api/config/db';
import initModels from '../api/models/index';


const initializeApp = async () => {
    await conexao();
    await initModels();

  };
  

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }

  module.exports = initializeApp;