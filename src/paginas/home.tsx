import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';

function Home() {
  return (
    <div className='container_home'>
      <Cabecalho />
      <h1> Pagina Inicial</h1>
      <Rodape />
    </div>
  );
}

export default Home;