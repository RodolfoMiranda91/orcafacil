import '../../estilo/estilo.css';
import ItensMenu from "../menu";
import LogoImg from '../../imagens/logo.png'


const cabecalho = () => {
  return (
    <div className='container_cabecalho'>

      <div className='divLogo'>
        <img src='../../../img/logo.png' alt='Logomarca' />
      </div>

      <div className='divMenu'> 
        <ItensMenu/> 
      </div>
      
      <div className='divLogin'>Usuário</div>

    </div>
  );
}

export default cabecalho;