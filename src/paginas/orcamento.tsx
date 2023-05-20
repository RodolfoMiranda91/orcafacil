import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';

function Orcamento() {    
  return (
    <div>
      <Cabecalho titulo="Você está na Página de Orçamento"/>
      <h1>Orçamento</h1>
      <Rodape />
    </div>
  );
}

export default Orcamento;
