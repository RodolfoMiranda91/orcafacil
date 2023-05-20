import '../../estilo/estilo.css'
import ItensMenu from "../menu";

const cabecalho = () => {
  return (
    <div className='container_cabecalho'>

      <div className='divLogo'>Logo</div>

      <div className='divMenu'> 
        <ItensMenu/> 
      </div>
      
      <div className='divLogin'>Usuário</div>

    </div>
  );
}

export default cabecalho;