import '../../estilo/estilo.css';
import { Link } from 'react-router-dom';

const itensMenu = () => {  
  let Menu1: string = "Home";
  let Menu2: string = "Orçamento";
  let Menu3: string = "Lista de Orçamentos";
  let Menu4: string = "Progresso";
  let Menu5: string = "Receber";
  return (
    <div>
      <table>
        <tr>
          <td><Link to="/">{Menu1}</Link></td>
          <td><Link to="/orcamento">{Menu2}</Link></td>
          <td><Link to="/listaorcamento">{Menu3}</Link></td>
          <td><Link to="/progresso">{Menu4}</Link></td>
          <td><Link to="/receber">{Menu5}</Link></td>
        </tr>
      </table>
    </div>
  );
}

export default itensMenu;