import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';

function Progresso() {    
  return (
    <div>
      <Cabecalho titulo="Você está na Página de Progreso do seu Serviço"/>
      <h1>Progresso</h1>
      <Rodape/>
    </div>
  );
}

export default Progresso;
