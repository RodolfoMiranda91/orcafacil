import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';


function Cadastro() {    
  return (
    <div>
      <Cabecalho titulo="Você está na Página de Cadastro"/>
      <h1> Cadastro de usuário</h1>
      <Rodape/>
    </div>
  );
}

export default Cadastro;
