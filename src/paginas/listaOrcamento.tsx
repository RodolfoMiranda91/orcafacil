import '../estilo/estilo.css'
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';

function ListaOrcamento() {
  return (
    <div>
      <Cabecalho titulo="Você está na Página de Listagem de Orçamentos"/>
      <h1> Lista de Orçamento</h1>
      <Rodape />
    </div>
  );
}

export default ListaOrcamento;
