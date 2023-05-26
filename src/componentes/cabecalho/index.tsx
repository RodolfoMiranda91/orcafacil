import { type } from 'os';
import '../../estilo/estilo.css';
import ItensMenu from "../menu";

type Props = {
  titulo?: String;
}

function cabecalho(parametro: Props) {
  return (
    <div>

      <div className='container_cabecalho'>
      <div className='divLogo'>
        <img className='logo' src='/logo.png' alt='Logomarca'/>
      </div>
        <div className='divclass2'>
          <ItensMenu />
        </div>
        <div className='divLogin'>Usuário</div>
      </div> 

        <div className='divcaminho'>{parametro.titulo}</div>

    </div>
  )
}

export default cabecalho;