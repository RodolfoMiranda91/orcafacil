import './estilo/estilo.css';
import {Routes, Route} from 'react-router-dom';
import Login from './paginas/login';
import Cadastro from './paginas/cadastro';
import Home from './paginas/home';
import Orcamento from './paginas/orcamento';
import ListaOrcamento from './paginas/listaOrcamento';
import Progresso from './paginas/progresso';
import Receber from './paginas/receber';
import Notfound from './paginas/notfound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/orcamento" element={<Orcamento/>}/>
        <Route path="/listaorcamento" element={<ListaOrcamento/>}/>
        <Route path="/progresso" element={<Progresso/>}/>
        <Route path="/receber" element={<Receber/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
  );
}

export default App;
