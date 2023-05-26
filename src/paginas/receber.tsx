import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';

function Receber() {    
  return (
    <div>
      <Cabecalho titulo="Você está na Página de Receber"/>
      <h1>Receber</h1>
      <Rodape/>
    </div>
  );
}

export default Receber;
